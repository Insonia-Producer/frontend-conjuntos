'use client'

import React, { useEffect, useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const cartas = [
    '/cards/gloria.png',
    '/cards/salmão.png',
    '/cards/morte.png',
    '/cards/bravura.png',
    '/cards/coringa.png',
]

const verso = '/cards/Back.png'

export default function CardFlip() {
    const [flipped, setFlipped] = useState(false)
    const [index, setIndex] = useState(0)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setFlipped((prev) => !prev)

            if (!flipped) {
                setIndex((prev) => (prev + 1) % cartas.length)
            }
        }, flipped ? 3000 : 1000)

        return () => clearInterval(interval)
    }, [flipped])

    return (
        <div className="w-[250px] h-[350px] relative">
            {/* Verso */}
            <a.div
                className="absolute w-[228px] h-[318px] rounded-xl bg-[#1B1448] bg-center bg-contain bg-no-repeat backface-hidden shadow-2xl"
                style={{
                    opacity: opacity.to((o) => 1 - o),
                    transform,
                    backgroundImage: `url(${verso})`,
                }}
            />

            {/* Frente */}
            <a.div
                className="absolute w-[228px] h-[318px] rounded-xl bg-[#D7EFF3] bg-center bg-contain bg-no-repeat backface-hidden shadow-2xl"
                style={{
                    opacity,
                    transform,
                    rotateY: '180deg',
                    backgroundImage: `url(${cartas[index]})`,
                }}
            />
        </div>
    )
}
