import { motion, Variants } from 'framer-motion'
import React from 'react'

interface Props {
    children: any
    staggerSpeed?: number
    delay?: number
}

export function StaggerChildren({ children, staggerSpeed = 0.05, delay = 0.2 }: Props) {
    const stagger = {
        hidden: {},
        visible: {
            transition: {
                delay,
                staggerChildren: staggerSpeed,
                ease: 'easeOut',
            },
        },
    } as Variants

    return (
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 'some' }}>
            {children}
        </motion.div>
    )
}
