export const kpiData = {
  people: {
    week: "Week 43",
    location: "Operation 3575",
    kpis: {
      attendance: {
        value: "99.5",
        unit: "%",
        label: "Tingkat Kehadiran",
        totalKaryawan: 476,
        sakit: 11,
        alfa: 0,
        target: "100"
      }
    },
    insight: "Tingkat kehadiran tetap tinggi sebesar 97,5% dengan ketidakhadiran yang sangat minim. Dengan persentase kehadiran yang tinggi, menunjukkan bahwa adanya semangat kerja dan integritas yang tinggi di minggu ini"
  },

  safety: {
   week: "Week 43",
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
        value: "49",
        label: "Laporan",
        target: "min.1 Laporan"
      }
    },
    insight: ""
  },

  cost: {
   week: "Week 43",
    location: "All Area",
    kpis: {
      overtime: {
        value: "99",
        unit: "%",
        label: "from planned",
        target: "100%"
      },
      repair_maintenance: {
        value: "90",
        unit: "%",
        label:"from planned",
        target: "100%"
      }
    },
    insight: ""
  },

  delivery: {
    week: "Week 43",
    location: "All Area",
    kpis: {
      mifot: {
        joinerydoors: {
          value: "99",
          unit: "%",
          target: "100"
        },
        slabdoors_flush: {
          value: "87",
          unit: "%",
          target: "100"
        },
        wrd: {
          value: "67",
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
          value: "0.08",
          unit: "%",
          target: "0"
        }
      },
      difot: {
        joinerydoors: {
          value: "95",
          unit: "%",
          target: "100"
        },
        slabdoors_flush: {
          value: "87",
          unit: "%",
          target: "100"
        }
      }
    },
    insight: ""
  },

  quality: {
    week: "Week 43",
    location: "All Area",
    kpis: {
    nc_router_doors: {
      value: "26",
      unit: "pieces",
      target: "0"
    },
    image: {
      label: "Dowel terlepas dari bottom rail",
      url: "https://drive.google.com/file/d/your-file-id/view"
    }
  },

},
  
  inventory:{
    week: "Week 43",
    location: "All Area",
    kpis: {
    component: {
      value: "107.47",
      unit: "%",
      label: "from planned",
      target: "100"
    },
    sf_inventory: {
      value: "38",
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
