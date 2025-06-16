'use client'

import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
})
const from = (_i: number) => ({ x: 10, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(25deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export function Deck({ cards }) {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity > 0.1 // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        api.start(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (30) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const y = isGone ? (30) * dir : down ? mx : 0
            const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.4 : 1 // Active cards lift up a bit
            return {
                x,
                y,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!down && gone.size === cards.length)
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i))
            }, 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (
        <>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className="h-[200px] will-change-transform flex items-center justify-center touch-none" key={i} style={{ x, y }}>
                    {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                    <animated.div
                        {...bind(i)}
                        className="
                            bg-[#D7EFF4]
                            bg-center 
                            bg-no-repeat 
                            w-[150px] 
                            h-[209px] 
                            will-change-transform 
                            rounded-[10px] 
                            shadow-2xl
                        "
                        style={{
                            transform: interpolate([rot, scale], trans),
                            backgroundImage: `url(${cards[i]})`,
                            backgroundSize: 'auto 95%',
                        }}
                    />
                </animated.div>
            ))}
        </>
    )
}