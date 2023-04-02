import { motion } from 'framer-motion';
import React, { useState } from 'react'
import {InView} from 'react-intersection-observer';

const FromRight = ({ children, y }) => {
    const [isin, setisin] = useState(false);

    const initial = {
        y: y ? y : 150,
        opacity: 0,
    }

    const animate = {
        y: 0,
        opacity: 1,
    }
    return (
        <InView onChange={(inView, entry) => setisin(inView)}>
            <motion.div initial={initial} animate={isin ? animate : ""} transition={{
                type: 'tween',
                duration: .5
            }}>
                {children}
            </motion.div>
        </InView>
    )
}

export default FromRight