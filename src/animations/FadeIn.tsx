import { motion, Variants } from 'framer-motion'
import React from 'react'

interface Props {
    children: any
    direction?: 'up' | 'none'
    staggered?: boolean
    delay?: number
    duration?: number
    instant?: boolean
}

export function FadeIn({
    children,
    direction = 'none',
    staggered = false,
    delay = 0.1,
    duration = 1,
    instant = false,
}: Props) {
    const fadeIn = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: delay,
                ease: 'easeOut',
                duration: duration,
            },
        },
    } as Variants

    if (staggered) return <motion.div variants={fadeIn}>{children}</motion.div>
    else
        return (
            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: instant ? undefined : 'some' }}
            >
                {children}
            </motion.div>
        )
}
