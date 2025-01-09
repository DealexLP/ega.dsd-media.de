'use client';

import {useRef, ReactNode} from 'react';
import {motion} from 'framer-motion';
import useInView from '@/hooks/useInView';

interface SlideTopProps {
    children: ReactNode;
    delay?: number;
    singleUse?: boolean;
}

const SlideTop: React.FC<SlideTopProps> = ({children, delay = 0, singleUse = true}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, {threshold: 0.1}, singleUse);

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0, y: -100}}
            animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: -100}}
            transition={{duration: 0.5, delay}}
        >
            {children}
        </motion.div>
    );
};

export default SlideTop;
