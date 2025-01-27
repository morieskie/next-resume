"use client";

export const PageTransitionOptions = {
  transition: {
    rotateClockwise: {
      initial: {
        translateX: "100%",
        y: 200,
        rotateY: "50deg",
        height: "0%",
        scale: 0.2,
        opacity: 0.3,
      },
      animate: {
        translateX: 0,
        y: 0,
        height: "100%",
        rotateY: "0deg",
        scale: 1,
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
      },
      exit: {
        translateX: "-100%",
        y: 200,
        height: "-10%",
        scale: 0.2,
        opacity: 0,
        transition: { duration: 1, delay: 0.1 },
        rotateY: "-50deg",
      },
    },
    rotateSidesIn: {
      initial: false,
      className: "pt-page-rotateSidesIn pt-page-delay200",
      animate: {
        opacity: 1,
      },
      exit: {
        className: "pt-page-rotateSidesOut",
        opacity: 0,
        transition: { duration: 0.3 },
      },
    },
    rotateCubeTopIn: {
      initial: {
        opacity: 0.2,
        transformOrigin: "50% 0%",
        translateY: '100%',
        rotateX: '-90%'
      },
      animate: {
        transformOrigin: "50% 50%",
        transition: { duration: 0.6, ease: "easeIn" },
        transform: [
          "translateY(100%) rotateX(-90deg)",
          "translateY(50%) translateZ(-200px) rotateX(-45deg)",
          "translateY(0%) translateZ(0px) rotateX(0deg)"
        ],
        opacity: 1,
      },
      exit: {
        transformOrigin: "50% 100%",
        transition: {
          duration: 0.6,
          ease: ["easeOut", "easeIn"],
        },
        transform: [
          "translateY(-50%) translateZ(-200px) rotateX(45deg)",
          "translateY(-100%) rotateX(90deg)",
        ],
        opacity: 0,
      },
    },
    flipInLeft: {
      initial: {
        transformOrigin: "50% 50%",
        transform: "translateZ(-1000px) rotateY(-90deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 0.2,
      },
      animate: {
        transformOrigin: "50% 50%",
        transform: "translateZ(0) rotateY(0deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 1,
      },
      exit: {
        transformOrigin: "50% 50%",
        transform: "translateZ(-1000px) rotateY(90deg)",
        transition: { duration: 0.5, ease: "easeOut" },
        opacity: 0.2,
      },
    },
    flipInRight: {
      initial: {
        transformOrigin: "50% 50%",
        transform: "translateZ(-1000px) rotateY(90deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 0.2,
      },
      animate: {
        transformOrigin: "50% 50%",
        transform: "translateZ(0) rotateY(0deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 1,
      },
      exit: {
        transformOrigin: "50% 50%",
        transform: "translateZ(-1000px) rotateY(-90deg)",
        transition: { duration: 0.5, ease: "easeOut" },
        opacity: 0.2,
      },
    },
    flipInBottom: {
      initial: {
        transform: "translateZ(-1000px) rotateX(-90deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 0.2,
      },
      animate: {
        transform: "translateZ(0px) rotateX(0deg)",
        transition: { duration: 0.5, ease: "easeIn" },
        opacity: 1,
      },
      exit: {
        transition: { duration: 0.5, ease: "easeIn" },
        transform: "translateZ(-1000px) rotateX(90deg)",
        opacity: 0.2,
      },
    },
    flipInTop: {
      initial: {
        opacity: 1,
        transform: "translateZ(-1000px) rotateX(90deg)",
        transision: { dudation: 0.5, ease: "easeOut" },
      },
      animate: {
        opacity: 1,
        transform: "translateZ(0px) rotateX(0deg)",
        transision: { dudation: 0.5, ease: "easeOut" },
      },
      exit: {
        opacity: 0.2,
        transform: "translateZ(-1000px) rotateX(-90deg)",
        transition: { duration: 0.5, ease: "easeIn" },
      },
    },
    moveFromBottom: {
      initial: {
        translateY: "100%",
      },
      animate: {
        translateY: "0%",
        transition: {
          ease: ["easeIn", "easeOut"],
          duration: 0.6,
          delay: 0.2,
        },
      },
      exit: {
        opacity: [1, 0.8, 0],
        transform: [
          "rotateX(-15deg)", // 40%
          "rotateX(-15deg) scale(0.8) translateZ(-200px)", // 100%
        ],
        transition: {
          duration: 0.8,
          ease: ["easeOut", "easeIn"],
        },
      },
    },
    moveFromTop: {
      initial: {
        translateY: "-100%",
      },
      animate: {
        translateY: "0%",
        transition: {
          ease: ["easeIn", "easeOut"],
          duration: 0.6,
          delay: 0.2,
        },
      },
      exit: {
        opacity: [1, 0.8, 0],
        transform: [
          "rotateX(15deg)", // 40%
          "scale(0.8) translateZ(-200px)", // 100%
        ],
        transition: {
          duration: 0.8,
          ease: ["easeOut", "easeIn"],
        },
      },
    },
    moveFromLeft: {
      initial: {
        transform: "translateX(-100%)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.2,
        },
        duration: 0.6,
      },
      animate: {
        transform: "translateX(0)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.2,
        },
        duration: 0.6,
        opacity: 1,
      },
      exit: {
        transform: "translateX(100%)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.7,
        },
      },
    },
    moveFromRight: {
      initial: {
        transform: "translateX(100%)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.2,
        },
        duration: 0.6,
      },
      animate: {
        transform: "translateX(0)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.2,
        },
        duration: 0.6,
        opacity: 1,
      },
      exit: {
        transform: "translateX(-100%)",
        transition: {
          ease: ["easeOut", "easeIn"],
          delay: 0.7,
        },
      },
    },
    rotateInNewspaper: {
        initial: {
            opacity: 0.2,
            transform: `translateZ(-3000px) rotateZ(-360deg)`,
            transition: { delay: 0.5, duration: 0.5, ease:['easeOut']}
        },
        animate: {
            transform: `translateZ(0px) rotateZ(0deg)`,
            transition: { delay: 0.5, duration: 0.5, ease:['easeOut']},
            opacity: 1
        },
        exit: {
            transform: [
                'translateZ(0px) rotateZ(0deg)',
                'translateZ(-3000px) rotateZ(360deg)'
            ],
            transition:{
                duration: 0.5,
                ease: ["easeIn"]
            },
            opacity: 0
        },
    },
    rotatePullRight: {
        initial: {
            transformOrigin: '100% 50%',
            rotateY: '-90%',
            opacity:0
        },
        animate: {
             transformOrigin: '0% 50%',
            rotateY: '0%',
            opacity:1,
            transition:{
                duration: 0.5,
                ease: ["easeIn", "easeOut"],
                delay: 0.180
            }
        },
        exit: {
            transform:[
                'rotateY(0deg)',
                'rotateY(-90deg)'
            ],
            transition: {
                duration: 0.8,
                ease: ['easeIn', 'easeOut']
            }
        },
    },
    rotatePullLeft: {
        initial: {
            transformOrigin: '50% 0%',
            rotateY: '90%',
            opacity:0
        },
        animate: {
            transformOrigin: '100% 50%',
            rotateY: '0%',
            opacity:1,
            transition:{
                duration: 0.5,
                ease: ["easeIn", "easeOut"],
                delay: 0.180
            }
        },
        exit: {
            transform:[
                'rotateY(0deg)',
                'rotateY(90deg)'
            ],
            transition: {
                duration: 0.8,
                ease: ['easeIn', 'easeOut']
            }
        },
    }
  },
};
