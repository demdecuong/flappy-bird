import React from 'react'
import FGImg from '../img/foreground.jpg'

const ForeGround = () =>{
    return(
        <div 
            style={{
                position:'absolute',
                bottom:0,
                width:288,
                height:100,
                background:`url(${FGImg})`,
                
            }}
        >

        </div>
    )
}

export default ForeGround;