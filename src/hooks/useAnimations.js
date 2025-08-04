import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Hook para animações de entrada
export const useFadeInUp = (delay = 0) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return {
        ref,
        style: {
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.6s ease-out ${delay}s`
        }
    };
};

// Hook para animações de escala
export const useScaleIn = (delay = 0) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    return {
        ref,
        style: {
            transform: isInView ? "scale(1)" : "scale(0.9)",
            opacity: isInView ? 1 : 0,
            transition: `all 0.5s ease-out ${delay}s`
        }
    };
};

// Hook para animações de slide
export const useSlideIn = (direction = 'left', delay = 0) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    
    const getTransform = () => {
        switch (direction) {
            case 'left':
                return isInView ? "translateX(0)" : "translateX(-50px)";
            case 'right':
                return isInView ? "translateX(0)" : "translateX(50px)";
            case 'up':
                return isInView ? "translateY(0)" : "translateY(50px)";
            case 'down':
                return isInView ? "translateY(0)" : "translateY(-50px)";
            default:
                return isInView ? "translateX(0)" : "translateX(-50px)";
        }
    };
    
    return {
        ref,
        style: {
            transform: getTransform(),
            opacity: isInView ? 1 : 0,
            transition: `all 0.6s ease-out ${delay}s`
        }
    };
};

// Variantes de animação reutilizáveis
export const animationVariants = {
    // Fade in up
    fadeInUp: {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    },
    
    // Scale in
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    },
    
    // Slide in from left
    slideInLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    },
    
    // Slide in from right
    slideInRight: {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    },
    
    // Stagger children
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    },
    
    // Hover animations
    hoverScale: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    
    hoverLift: {
        y: -10,
        transition: { duration: 0.3 }
    },
    
    // Button animations
    buttonHover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    
    buttonTap: {
        scale: 0.95,
        transition: { duration: 0.1 }
    }
}; 