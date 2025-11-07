import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from './supabaseClient';
import Login from './components/login';
import OpeningPage from './components/openingPage';
import PeoplePage from './components/peoplePage';
import SafetyPage from './components/safetyPage';
import QualityPage from './components/qualityPage';
import CostPage from './components/costPage';
import DeliveryPage from './components/deliveryPage';
import InventoryPage from './components/inventoryPage';
import PeopleInputForm from './components/inputform/peopleInput';
import SafetyInputForm from './components/inputform/safetyInput';
import QualityInputForm from './components/inputform/qualityInput';
import CostInputForm from './components/inputform/costInput';
import DeliveryInputForm from './components/inputform/deliveryInput';
import InventoryInputForm from './components/inputform/inventoryInput';
import { kpiData as initialKpiData } from './data/kpiData';

function App() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('dashboard');
  const [kpiDataState, setKpiDataState] = useState(initialKpiData);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);
  const isProcessing = useRef(false);

  const pages = [
    { name: 'opening', component: OpeningPage, data: null, color: 'bg-gray-500' },
    { name: 'people', component: PeoplePage, data: kpiDataState.people, color: 'bg-blue-500' },
    { name: 'safety', component: SafetyPage, data: kpiDataState.safety, color: 'bg-red-500' },
    { name: 'quality', component: QualityPage, data: kpiDataState.quality, color: 'bg-green-500' },
    { name: 'cost', component: CostPage, data: kpiDataState.cost, color: 'bg-amber-500' },
    { name: 'delivery', component: DeliveryPage, data: kpiDataState.delivery, color: 'bg-teal-500' },
    { name: 'inventory', component: InventoryPage, data: kpiDataState.inventory, color: 'bg-purple-500' },
  ];

  const processSession = useCallback(async (currentSession) => {
    if (isProcessing.current) return;
    
    if (!currentSession) {
      setUser(null);
      setLoading(false);
      return;
    }
    
    isProcessing.current = true;
    
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (!authUser) {
        setUser(null);
        setLoading(false);
        isProcessing.current = false;
        return;
      }

      const userMetadata = authUser.user_metadata || {};
      const role = userMetadata.role || 'people';
      const page = userMetadata.page || role;
      
      const userProfile = {
        id: authUser.id,
        email: authUser.email,
        role: role,
        page: page
      };
      
      setUser(userProfile);
      setMode(role === 'admin' ? 'dashboard' : 'input');
      setLoading(false);
    } catch {
      setUser(null);
      setLoading(false);
    } finally {
      isProcessing.current = false;
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (mounted) processSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;
      
      if (event === 'SIGNED_IN') {
        processSession(session);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setMode('dashboard');
        setCurrentPage(0);
        setLoading(false);
        isProcessing.current = false;
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [processSession]);

  useEffect(() => {
    fetchKpiData();
    
    const subscription = supabase
      .channel('kpi_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'kpi_data' }, fetchKpiData)
      .subscribe();
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchKpiData = async () => {
    try {
      const { data } = await supabase.from('kpi_data').select('*').order('id');
      
      if (data && data.length > 0) {
        const formattedData = {
          people: data.find(d => d.category === 'people')?.data || initialKpiData.people,
          safety: data.find(d => d.category === 'safety')?.data || initialKpiData.safety,
          quality: data.find(d => d.category === 'quality')?.data || initialKpiData.quality,
          cost: data.find(d => d.category === 'cost')?.data || initialKpiData.cost,
          delivery: data.find(d => d.category === 'delivery')?.data || initialKpiData.delivery,
          inventory: data.find(d => d.category === 'inventory')?.data || initialKpiData.inventory,
        };
        setKpiDataState(formattedData);
      }
    } catch {}
  };

  const updateKpiData = async (category, data) => {
    try {
      await supabase
        .from('kpi_data')
        .upsert({ category, data, updated_at: new Date().toISOString() }, { onConflict: 'category' });
    } catch {
      alert('Gagal menyimpan data ke database');
    }
  };

  const handleLogin = async (credentials) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });
  
  if (error) {
    throw new Error(error.message);
  }
};

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const handleSavePeople = async (formData) => {
    const updatedPeople = {
      ...kpiDataState.people,
      week: formData.week,
      kpis: {
        attendance: {
          ...kpiDataState.people.kpis.attendance,
          value: formData.attendanceValue,
          totalKaryawan: parseInt(formData.totalKaryawan),
          sakit: parseInt(formData.sakit),
          alfa: parseInt(formData.alfa)
        }
      }
    };
    setKpiDataState({ ...kpiDataState, people: updatedPeople });
    await updateKpiData('people', updatedPeople);
  };

  const handleSaveSafety = async (formData) => {
    const updatedSafety = {
      ...kpiDataState.safety,
      week: formData.week,
      kpis: {
        incident: { ...kpiDataState.safety.kpis.incident, value: formData.incidentValue },
        no_incident: { ...kpiDataState.safety.kpis.no_incident, value: formData.noincidentValue },
        share_it: { ...kpiDataState.safety.kpis.share_it, value: formData.shareitValue }
      }
    };
    setKpiDataState({ ...kpiDataState, safety: updatedSafety });
    await updateKpiData('safety', updatedSafety);
  };

  const handleSaveQuality = async (formData) => {
    const updatedQuality = {
      ...kpiDataState.quality,
      week: formData.week,
      kpis: {
        nc_router_doors: { ...kpiDataState.quality.kpis.nc_router_doors, value: formData.ncRouterValue },
        image: { label: formData.imageLabel, url: formData.imageUrl }
      }
    };
    setKpiDataState({ ...kpiDataState, quality: updatedQuality });
    await updateKpiData('quality', updatedQuality);
  };

  const handleSaveCost = async (formData) => {
    const updatedCost = {
      ...kpiDataState.cost,
      week: formData.week,
      kpis: {
        overtime: { ...kpiDataState.cost.kpis.overtime, value: formData.overtimeValue },
        repair_maintenance: { ...kpiDataState.cost.kpis.repair_maintenance, value: formData.repairMaintenanceValue }
      }
    };
    setKpiDataState({ ...kpiDataState, cost: updatedCost });
    await updateKpiData('cost', updatedCost);
  };

  const handleSaveDelivery = async (formData) => {
    const updatedDelivery = {
      ...kpiDataState.delivery,
      week: formData.week,
      kpis: {
        mifot: {
          joinerydoors: { ...kpiDataState.delivery.kpis.mifot.joinerydoors, value: formData.mifotJoineryDoors },
          slabdoors_flush: { ...kpiDataState.delivery.kpis.mifot.slabdoors_flush, value: formData.mifotSlabDoorsFlush },
          wrd: { ...kpiDataState.delivery.kpis.mifot.wrd, value: formData.mifotWrd }
        },
        maintenance_perform: {
          mttr: { ...kpiDataState.delivery.kpis.maintenance_perform.mttr, value: formData.mttr },
          am_tpm: { ...kpiDataState.delivery.kpis.maintenance_perform.am_tpm, value: formData.amTpm },
          breakdown_ratio: { ...kpiDataState.delivery.kpis.maintenance_perform.breakdown_ratio, value: formData.breakdownRatio }
        },
        difot: {
          joinerydoors: { ...kpiDataState.delivery.kpis.difot.joinerydoors, value: formData.difotJoineryDoors },
          slabdoors_flush: { ...kpiDataState.delivery.kpis.difot.slabdoors_flush, value: formData.difotSlabDoorsFlush }
        }
      }
    };
    setKpiDataState({ ...kpiDataState, delivery: updatedDelivery });
    await updateKpiData('delivery', updatedDelivery);
  };

  const handleSaveInventory = async (formData) => {
    const updatedInventory = {
      ...kpiDataState.inventory,
      week: formData.week,
      kpis: {
        component: { ...kpiDataState.inventory.kpis.component, value: formData.componentValue },
        sf_inventory: { ...kpiDataState.inventory.kpis.sf_inventory, value: formData.sfInventoryValue }
      }
    };
    setKpiDataState({ ...kpiDataState, inventory: updatedInventory });
    await updateKpiData('inventory', updatedInventory);
  };

  const paginate = (newPage) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (mode === 'dashboard' && user) {
      const timer = setInterval(() => {
        setCurrentPage((prev) => {
          const next = (prev + 1) % pages.length;
          setDirection(1);
          return next;
        });
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [mode, user, pages.length]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-2xl font-bold mb-4">Loading...</div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  if (mode === 'input') {
    if (user.page === 'people') {
      return <PeopleInputForm onSave={handleSavePeople} currentData={kpiDataState.people} onLogout={handleLogout} />;
    }
    if (user.page === 'safety') {
      return <SafetyInputForm onSave={handleSaveSafety} currentData={kpiDataState.safety} onLogout={handleLogout} />;
    }
    if (user.page === 'quality') {
      return <QualityInputForm onSave={handleSaveQuality} currentData={kpiDataState.quality} onLogout={handleLogout} />;
    }
    if (user.page === 'cost') {
      return <CostInputForm onSave={handleSaveCost} currentData={kpiDataState.cost} onLogout={handleLogout} />;
    }
    if (user.page === 'delivery') {
      return <DeliveryInputForm onSave={handleSaveDelivery} currentData={kpiDataState.delivery} onLogout={handleLogout} />;
    }
    if (user.page === 'inventory') {
      return <InventoryInputForm onSave={handleSaveInventory} currentData={kpiDataState.inventory} onLogout={handleLogout} />;
    }
  }

  const CurrentComponent = pages[currentPage].component;

  return (
    <div className="relative">
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 flex gap-3">
          {pages.map((page, idx) => (
            <button
              key={idx}
              onClick={() => paginate(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentPage ? 'w-10 bg-white' : `w-2 ${page.color} hover:bg-white/70`
              }`}
            />
          ))}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="fixed top-8 right-8 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:bg-red-700 z-50"
      >
        Logout
      </button>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <CurrentComponent data={pages[currentPage].data} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;