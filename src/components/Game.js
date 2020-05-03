import React, { useEffect } from 'react'
import Bird from './Bird'
import Pipe from './Pipe'
import ForeGround from './ForeGround'
import BackgroundImg from '../img/background.png'

import { connect } from 'react-redux'

const Game = ({ status, start, flyAction }) => {
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.keyCode == 32) {
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
    console.log("Fly")
}
const start = () => {
    return (dispatch, getState) => {
        const { status } = getState().Game

        if (status !== 'playing') {
            setInterval(() => {
                dispatch({ type: 'FALL' })
                dispatch({ type: 'RUNNING' })
            }, 300)

            setInterval(()=>{
                dispatch({ type: 'GENERATE' })
            },3000)
            dispatch({ type: 'START' })
        }
    }
}

const mapStateToProps = ({ Game }) => ({ status: Game.status })
const mapDispatchToProps = { start, flyAction }

export default connect(mapStateToProps, mapDispatchToProps)(Game);