import { motion } from 'framer-motion';
import React, { useState } from 'react'
import InView from 'react-intersection-observer';

const Opzoom = ({ children, speed }) => {
    const [isin, setisin] = useState(false);

    const initial = {
        scale: 0.5,
        opacity: 0,
    }

    const animate = {
        scale: 1,
        opacity: 1,
    }
    return (
        <InView onChange={(inView, entry) => setisin(inView)}>
            <motion.div initial={initial} animate={isin ? animate : ""} transition={{
                type: 'tween',
                duration: speed ? speed : .5
            }}>
                {children}
            </motion.div>
        </InView>
    )
}

export default Opzoom