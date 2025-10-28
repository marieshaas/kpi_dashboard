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
        alfa: 0
      }
    },
    insight: "Tingkat kehadiran tetap tinggi sebesar 97,5% dengan ketidakhadiran yang sangat minim. Dengan persentase kehadiran yang tinggi, menunjukkan bahwa adanya semangat kerja dan integritas yang tinggi di minggu ini"
  },

  safety: {
   week: "Week 43",
    location: "All Area",
    kpis: {
      trir: {
        value: "0",
        unit: "%",
      },
      lti_fr: {
        value: "0",
        unit: "%",
      },
      share_it: {
        value: "49",
        label: "Laporan"
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
        label: "difference from planned"
      },
      repair_maintenance: {
        value: "90",
        unit: "%",
        label:"difference from planned"
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
          value: "0",
          unit: "%"
        },
        slabdoors_flush: {
          value: "0",
          unit: "%"
        },
        wrd: {
          value: "0",
          unit: "%"
        }        
      },
      maintenance_perform: {
        mttr: {
          value: "35",
          unit: "min"
        },
        am_tpm: {
          value: "100",
          unit: "%"
        },
        breakdown_ratio: {
          value: "0.08",
          unit: "%"
        }
      },
      difot: {
        joinerydoors: {
          value: "0",
          unit: "%"
        },
        slabdoors_flush: {
          value: "0",
          unit: "%"
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
      unit: "pcs",
    },
    image: {
      label: "dowel terlepas dari bottom rail"
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
      label: "difference from planned"
    },
    sf_inventory: {
      value: "38",
      unit: "%",
      label: "difference from planned"
    }
  },
}
};


export const users = [
  { username: "admin", password: "admin123", role: "admin", page: "people" },
];