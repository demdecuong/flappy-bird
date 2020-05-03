import React from 'react'
import Bird from './Bird'
import Pipe from './Pipe'
import ForeGround from './ForeGround'

import BackgroundImg from '../img/background.png'
const Game = () => {
    return(
        <div
            style={{
                position:'relative',
                width: 288,
                height:505,
                background:`url(${BackgroundImg})`
            }}
        >
            <Bird/>
            <Pipe/>
            <ForeGround/>
        </div>
    )
}

export default Game;