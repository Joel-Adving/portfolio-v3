'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Sphere, Trail } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'

export function MeshTrail({ modifier }: any) {
  const { viewport } = useThree()
  const sphere = useRef<Mesh>(null!)

  useFrame((state) => {
    if (viewport.width < 20) return

    sphere.current.position.x = state.mouse.x * state.viewport.height * 3
    sphere.current.position.y = state.mouse.y * state.viewport.height + 10
    sphere.current.position.z = -20
    modifier
    //     (-(state.mouse.y * state.viewport.width) / state.viewport.height) * state.viewport.width * 0.2 - 5
  })

  return (
    <>
      <Trail
        width={0.3}
        length={4}
        color={'white'}
        attenuation={(t: number) => {
          return t * t
        }}
      >
        <Sphere
          ref={sphere}
          args={[0, 0, 0]}
          position-x={0}
          position-y={0}
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
          getVertexPosition={undefined}
        ></Sphere>
      </Trail>
    </>
  )
}
