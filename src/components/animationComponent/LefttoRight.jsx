import { motion } from 'framer-motion';
import React, { useState } from 'react'
import InView from 'react-intersection-observer';

const LefttoRight = ({ children }) => {
    const [isin, setisin] = useState(false);

    const initial = {
        x: 200,
        opacity: 0,
    }

    const animate = {
        x: 0,
        opacity: 1,
    }
    return (
        <InView onChange={(inView, entry) => setisin(inView)}>
            <motion.div initial={initial} animate={isin ? animate : ""} transition={{
                type: 'tween',
                duration: .6,
            }}>
                {children}
            </motion.div>
        </InView>
    )
}

export default LefttoRight