import React from 'react'
import BirdImg from '../img/bird.png'


const Bird = () => {
    return(
        <div
            style={{
                position:'absolute',
                top:250,
                left:150,
                width:40,
                height:40,
                background: `url(${BirdImg})`
            }}
        >

        </div>
    )
}

export default Bird