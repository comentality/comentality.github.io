var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.04283989982167569,
        "pitch": 0.11078507060833687,
        "fov": 1.4816192991922632
      },
      "linkHotspots": [
        {
          "yaw": -0.005373423201755045,
          "pitch": 0.6068035155760843,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -0.5601892755793401,
          "pitch": 0.5820256963857311,
          "rotation": 0,
          "target": "2-hello-locker"
        },
        {
          "yaw": -2.474161015015259,
          "pitch": 0.7873346035984667,
          "rotation": 0,
          "target": "6-plain-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7835678454252246,
          "pitch": 0.719163888128115,
          "rotation": 0,
          "target": "2-hello-locker"
        },
        {
          "yaw": -0.13663234886494102,
          "pitch": 0.4519047314069127,
          "rotation": 0,
          "target": "7-reception-2"
        },
        {
          "yaw": 2.8670123750909315,
          "pitch": 0.29493015261242306,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -3.0457633770841372,
          "pitch": 0.3377592459644738,
          "rotation": 0,
          "target": "6-plain-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hello-locker",
      "name": "hello locker",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4868140797880827,
          "pitch": 0.6472441169650978,
          "rotation": 0,
          "target": "10-hello-toilet"
        },
        {
          "yaw": -2.3604604230453496,
          "pitch": 0.2220188822204605,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 2.733817939384233,
          "pitch": 0.7219140550778089,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-whiteboard",
      "name": "whiteboard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4120180596002392,
          "pitch": 0.44988679087077976,
          "rotation": 0,
          "target": "11-presenter"
        },
        {
          "yaw": -3.093858904394992,
          "pitch": 0.30357938622302605,
          "rotation": 0,
          "target": "5-play-station"
        },
        {
          "yaw": -3.102597933753282,
          "pitch": 0.18080754213646344,
          "rotation": 0,
          "target": "7-reception-2"
        },
        {
          "yaw": 2.518038606600582,
          "pitch": 0.15478155204138133,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": -0.5893681461270717,
          "pitch": 0.3250579937739211,
          "rotation": 0,
          "target": "12-chairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-mirror",
      "name": "mirror",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.057714645331843784,
          "pitch": 0.2366965066729243,
          "rotation": 0,
          "target": "11-presenter"
        },
        {
          "yaw": -0.3910911835488733,
          "pitch": 0.19886096751566917,
          "rotation": 0,
          "target": "3-whiteboard"
        },
        {
          "yaw": -1.3258129327695087,
          "pitch": 0.38277412608747774,
          "rotation": 0,
          "target": "5-play-station"
        },
        {
          "yaw": -1.9582759626653043,
          "pitch": 0.35267234400414793,
          "rotation": 0,
          "target": "7-reception-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-play-station",
      "name": "play station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0193150330342462,
          "pitch": 0.28228622847593066,
          "rotation": 0,
          "target": "3-whiteboard"
        },
        {
          "yaw": 0.4319522383105312,
          "pitch": 0.21601076371935335,
          "rotation": 0,
          "target": "11-presenter"
        },
        {
          "yaw": 1.6117048061420842,
          "pitch": 0.4913201023530078,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": -3.052479194968484,
          "pitch": 0.10338113510797164,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.8697834015163934,
          "pitch": 0.2995404279192737,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -2.908632950244984,
          "pitch": 0.5422611132647486,
          "rotation": 0,
          "target": "7-reception-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9969701831528717,
          "pitch": 0.20642688382368846,
          "title": "this guy",
          "text": "absolute dude"
        }
      ]
    },
    {
      "id": "6-plain-lockers",
      "name": "plain lockers",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1499690796728324,
          "pitch": 0.8107169144362594,
          "rotation": 0,
          "target": "9-plain-shower"
        },
        {
          "yaw": 0.769050475578041,
          "pitch": 0.5418245386844056,
          "rotation": 0,
          "target": "8-plain-toilet"
        },
        {
          "yaw": 2.4914089934805155,
          "pitch": 0.2781417094267482,
          "rotation": 0,
          "target": "1-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-reception-2",
      "name": "reception 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.825927696220182,
          "pitch": 0.6256147764620614,
          "rotation": 0,
          "target": "1-reception"
        },
        {
          "yaw": -3.1152225418008506,
          "pitch": 0.1355422465700915,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -2.87015130196248,
          "pitch": 0.18405090621717513,
          "rotation": 0,
          "target": "6-plain-lockers"
        },
        {
          "yaw": -2.3717136569966595,
          "pitch": 0.4110876578053162,
          "rotation": 0,
          "target": "2-hello-locker"
        },
        {
          "yaw": -0.012048897790815971,
          "pitch": 0.5314862688298287,
          "rotation": 0,
          "target": "5-play-station"
        },
        {
          "yaw": 1.0389901641764592,
          "pitch": 0.3899598137069109,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": 0.3420784941757944,
          "pitch": 0.20615799462421514,
          "rotation": 0,
          "target": "11-presenter"
        },
        {
          "yaw": 0.01916880124714737,
          "pitch": 0.25481131030365844,
          "rotation": 0,
          "target": "3-whiteboard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-plain-toilet",
      "name": "plain toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.110765850796108,
          "pitch": 0.5737092922185489,
          "rotation": 0,
          "target": "6-plain-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-plain-shower",
      "name": "plain shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2633530252367766,
          "pitch": 0.690460156032211,
          "rotation": 0,
          "target": "6-plain-lockers"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hello-toilet",
      "name": "hello toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.783246324422965,
          "pitch": 0.7362040656232018,
          "rotation": 0,
          "target": "2-hello-locker"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-presenter",
      "name": "presenter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3990779112421876,
          "pitch": 0.37955962950143274,
          "rotation": 0,
          "target": "3-whiteboard"
        },
        {
          "yaw": 3.110132406039149,
          "pitch": 0.23645690510655193,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": -2.748659870295267,
          "pitch": 0.1504904755914982,
          "rotation": 0,
          "target": "7-reception-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-chairs",
      "name": "chairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7157064277126555,
        "pitch": 0.10944869767005017,
        "fov": 1.4816192991922632
      },
      "linkHotspots": [
        {
          "yaw": -0.05826897071315962,
          "pitch": 0.05476237200590006,
          "rotation": 0,
          "target": "13-window"
        },
        {
          "yaw": 1.1554614947314654,
          "pitch": 0.46356124614201555,
          "rotation": 0,
          "target": "3-whiteboard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-window",
      "name": "window",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.074055699211641,
          "pitch": 0.27513908556631606,
          "rotation": 0,
          "target": "12-chairs"
        },
        {
          "yaw": 1.8501923640556317,
          "pitch": 0.21122031738120484,
          "rotation": 0,
          "target": "4-mirror"
        },
        {
          "yaw": 2.039047411227177,
          "pitch": 0.4771148094290858,
          "rotation": 0,
          "target": "11-presenter"
        },
        {
          "yaw": 2.067953125676449,
          "pitch": 0.161048435946487,
          "rotation": 0,
          "target": "7-reception-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
