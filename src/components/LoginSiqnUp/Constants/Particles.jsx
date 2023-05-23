export const frozenGlass = {
  fpsLimit: 60,
  fullScreen: { enable: true },
  particles: {
    number: {
      value: 50,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: 400,
      random: {
        enable: true,
        minimumValue: 200,
      },
    },
    move: {
      enable: true,
      speed: 10,
      direction: "top",
      outModes: {
        default: "out",
        top: "destroy",
        bottom: "none",
      },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
    },
  },
  style: {
    filter: "blur(50px)",
  },
  detectRetina: true,
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
     
          color: "#264067b3",
        },
        particles: {
          color: {
            value: ["#264067b3", "#14b8a6db"  ,"#234F6A","#14977B" ],
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        background: {
          color: "#080710",
        },
        particles: {
          color: {
             value: ["#264067b3", "#14b8a6db" ,"#234F6A" ,"#14977B"],
          },
        },
      },
    },
  ],
  emitters: {
    direction: "top",
    position: {
      x: 50,
      y: 150,
    },
    rate: {
      delay: 0.2,
      quantity: 2,
    },
    size: {
      width: 100,
      height: 0,
    },
  },
};



   //   color: "#f7f8ef",