import { motion } from 'framer-motion';

export default function AnimatedSection({ 
    children, 
    className = '', 
    delay = 0, 
    direction = 'up',
    duration = 0.6,
    once = true,
    amount = 0.3
}) {
    const getDirectionOffset = () => {
        switch (direction) {
            case 'up':
                return { y: 50 };
            case 'down':
                return { y: -50 };
            case 'left':
                return { x: 50 };
            case 'right':
                return { x: -50 };
            default:
                return { y: 50 };
        }
    };

    const variants = {
        hidden: { 
            opacity: 0, 
            ...getDirectionOffset(),
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration,
                delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
} 