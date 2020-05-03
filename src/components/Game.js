import React, { useEffect } from 'react'
import Bird from './Bird'
import Pipe from './Pipe'
import ForeGround from './ForeGround'
import BackgroundImg from '../img/background.png'

const Game = () => {
    useEffect( ()=>{
        const handleKeyPress = (e) =>{
            if(e.keyCode == 32){
                flyAction();
            }
        }
        document.addEventListener('keypress', handleKeyPress)
    }, [])


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

const flyAction = () => {
    console.log("Fly")
}

export default Game;