'use client';

import {useRef, ReactNode} from 'react';
import {motion} from 'framer-motion';
import useInView from '@/hooks/useInView';

interface PopInProps {
    children: ReactNode;
    delay?: number;
    singleUse?: boolean;
}

const PopIn: React.FC<PopInProps> = ({children, delay = 0, singleUse = true}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, {threshold: 0.1}, singleUse);

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, scale: 0.8}}
            animate={inView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.8}}
            transition={{duration: 0.5, delay}}
        >
            {children}
        </motion.div>
    );
};

export default PopIn;
