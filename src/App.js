import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PeoplePage from './components/peoplePage';
import SafetyPage from './components/safetyPage';
import CostPage from './components/costPage';
import DeliveryPage from './components/deliveryPage';
import QualityPage from './components/qualityPage';
import InventoryPage from './components/inventoryPage';
import OpeningPage from './components/openingPage';
import { kpiData } from './data/kpiData';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
     { name: 'opening', component: OpeningPage, data: null, color: 'bg-gray-500' },
    { name: 'people', component: PeoplePage, data: kpiData.people, color: 'bg-blue-500' },
    { name: 'safety', component: SafetyPage, data: kpiData.safety, color: 'bg-red-500' },
    { name: 'cost',   component: CostPage,   data: kpiData.cost ,  color: 'bg-amber-500' },
    { name: 'delivery', component: DeliveryPage, data: kpiData.delivery , color: 'bg-teal-500' },
    { name: 'quality', component: QualityPage, data: kpiData.quality , color: 'bg-green-500' },
    { name: 'inventory', component: InventoryPage, data: kpiData.inventory , color: 'bg-purple-500' },

  ];

  const CurrentComponent = pages[currentPage].component;

  // Auto-rotation setiap 10 detik 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
    }, 10000); 

    return () => clearInterval(timer);
  }, [pages.length]);

  const [direction, setDirection] = useState(0);

  const paginate = (newPage) => {
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
  };

  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 flex gap-3">
          {pages.map((page, idx) => (
            <button
              key={idx}
              onClick={() => paginate(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentPage 
                  ? 'w-10 bg-white' 
                  : `w-2 ${page.color} hover:bg-white/70`
              }`}
            />
          ))}
        </div>
      </div>

      {/* Page Content with Animation */}
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