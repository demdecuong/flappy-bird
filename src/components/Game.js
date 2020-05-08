import React, { useEffect } from 'react'
import Bird from './Bird'
import Pipe from './Pipe'
import ForeGround from './ForeGround'
import BackgroundImg from '../img/background.png'

import { connect } from 'react-redux'

let gameLoop
let pipeGenerator
let WIDTH = 288


const Game = ({ status, start, flyAction }) => {
    if (status === 'game-over') {
        clearInterval(gameLoop)
        clearInterval(pipeGenerator)
    }
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode === 32) {
                flyAction();
            }
            if (status !== 'playing') {
                start();
            }
        }
        document.addEventListener('keypress', handleKeyPress)
    }, [])

    console.log(status)

    return (
        <div
            style={{
                position: 'relative',
                width: 288,
                height: 505,
                background: `url(${BackgroundImg})`,
                overflow: 'hidden'
            }}
        >
            <Bird />
            <Pipe />
            <ForeGround />
        </div>
    )
}

const flyAction = () => {
    return (dispatch) => {
        dispatch({ type: 'FLY' })
    }

}

const start = () => {
    return (dispatch, getState) => {
        const { status } = getState().Game

        if (status !== 'playing') {
            gameLoop = setInterval(() => {
                dispatch({ type: 'FALL' })
                dispatch({ type: 'RUNNING' })

                check(dispatch,getState)
            }, 200)

            pipeGenerator = setInterval(() => {
                dispatch({ type: 'GENERATE' })
            }, 3000)
            dispatch({ type: 'START' })
        }
    }
}

const check = (dispatch, getState) => {
    const state = getState()
    const birdY = state.Bird.y
    const pipes = state.Pipe.pipes
    const x = state.Pipe.x

    const challenge = pipes.map(({ topHeight }, i) => {
        return {
            x1: x + i * 200,
            y1: topHeight,
            x2: x + i * 200,
            y2: topHeight + 100,
        }
    }).filter(({ x1 }) => {
        if (x1 > 0 && x1 < WIDTH) {
            return true
        }
    })
    // backgroundY = 505 , foregroundY = 100
    if (birdY > 505 - 100 - 19) {
        dispatch({ type: 'GAME_OVER' });
    }

    if (challenge.length) {
        const { x1, y1, x2, y2 } = challenge[0]

        let birdX = 40

        if (
            (x1 - 20 <= 120 && 120 < x1 + birdX && birdY - 5 <= y1) ||
            (x1 - 20 <= 120 && 120 < x1 + birdX && birdY + 10 >= y2)
        ) {
            dispatch({ type: 'GAME_OVER' });
        }
    }

}

const mapStateToProps = ({ Game }) => ({ status: Game.status })
const mapDispatchToProps = { start, flyAction }

export default connect(mapStateToProps, mapDispatchToProps)(Game);