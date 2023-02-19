'use client'

import { motion, Variants } from 'framer-motion'
import React from 'react'

interface Props {
  children: any
  direction?: 'up' | 'none'
  staggered?: boolean
  delay?: number
  duration?: number
  instant?: boolean
  className?: string
}

export function FadeIn({
  children,
  direction = 'none',
  staggered = false,
  delay = 0.1,
  duration = 1,
  instant = false,
  className = ''
}: Props) {
  const fadeIn = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        ease: 'easeOut',
        duration: duration
      }
    }
  } as Variants

  if (staggered)
    return (
      <motion.div className={className} variants={fadeIn}>
        {children}
      </motion.div>
    )
  else if (instant)
    return (
      <motion.div className={className} variants={fadeIn} initial="hidden" animate="visible">
        {children}
      </motion.div>
    )
  else
    return (
      <motion.div
        className={className}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 'some' }}
      >
        {children}
      </motion.div>
    )
}
