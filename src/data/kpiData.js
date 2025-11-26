export const kpiData = {
  people: {
    week: "Week 40",
    location: "Operation 3575",
    kpis: {
      attendance: {
        value: "100",
        unit: "%",
        label: "Tingkat Kehadiran",
        totalKaryawan: 500,
        sakit: 0,
        alfa: 0,
        target: "100"
      }
    },
    insight: "Tingkat kehadiran tetap tinggi sebesar 97,5% dengan ketidakhadiran yang sangat minim. Dengan persentase kehadiran yang tinggi, menunjukkan bahwa adanya semangat kerja dan integritas yang tinggi di minggu ini"
  },

  safety: {
   week: "Week 40",
    location: "All Area",
    kpis: {
      incident: {
        value: "0",
        label: "Insiden",
        target: "0"
      },
      no_incident: {
        value: "0",
        label: "Hari",
        target: "365"
      },
      share_it: {
        value: "50",
        label: "Laporan",
        target: "min.1 Laporan"
      }
    },
    insight: ""
  },

  cost: {
   week: "Week 40",
    location: "All Area",
    kpis: {
      overtime: {
        value: "100",
        unit: "%",
        label: "from planned",
        target: "100%"
      },
      repair_maintenance: {
        value: "100",
        unit: "%",
        label:"from planned",
        target: "100%"
      }
    },
    insight: ""
  },

  delivery: {
    week: "Week 40",
    location: "All Area",
    kpis: {
      mifot: {
        joinerydoors: {
          value: "100",
          unit: "%",
          target: "100"
        },
        slabdoors_flush: {
          value: "100",
          unit: "%",
          target: "100"
        },
        wrd: {
          value: "100",
          unit: "%",
          target: "100"
        }        
      },
      maintenance_perform: {
        mttr: {
          value: "0",
          unit: "min",
          target: "30"
        },
        am_tpm: {
          value: "100",
          unit: "%",
          target: "100"
        },
        breakdown_ratio: {
          value: "0.1",
          unit: "%",
          target: "0"
        }
      },
      difot: {
        joinerydoors: {
          value: "100",
          unit: "%",
          target: "100"
        },
        slabdoors_flush: {
          value: "100",
          unit: "%",
          target: "100"
        }
      }
    },
    insight: ""
  },

  quality: {
    week: "Week 40",
    location: "All Area",
    kpis: {
    nc_router_doors: {
      value: "50",
      unit: "pieces",
      target: "0"
    },
    image: {
      label: "-",
      url: "https://drive.google.com/file/d/your-file-id/view"
    }
  },

},
  
  inventory:{
    week: "Week 40",
    location: "All Area",
    kpis: {
    component: {
      value: "100",
      unit: "%",
      label: "from planned",
      target: "100"
    },
    sf_inventory: {
      value: "100",
      unit: "%",
      label: "from planned",
      target: "100"
    }
  },
}
};


export const users = [
  { username: "admin", password: "ciidash2025", role: "admin", page: "all" },
  { username: "peoplecii", password: "ciipeople", role: "people", page: "people" },
  { username: "safetycii", password: "ciisafety", role: "safety", page: "safety" },
  { username: "qualitycii", password: "ciiquality", role: "quality", page: "quality" },
  { username: "costcii", password: "ciicost", role: "cost", page: "cost" },
  { username: "deliverycii", password: "ciidelivery", role: "delivery", page: "delivery" },
  { username: "inventorycii", password: "ciiinventory", role: "inventory", page: "inventory" }
];
