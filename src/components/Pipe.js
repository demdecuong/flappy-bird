import React from 'react'
import BottomPipImg from '../img/bottom_pipe.png'
import TopPipImg from '../img/top_pipe.png'

const Pipe = () => {
    return (
        <div>
            <div style={{
                position:'absolute',
                top:0,
                left:150,
                width:50,
                height:200,
                background: `url(${TopPipImg})`,
                backgroundPosition:'bottom',
            }}>

            </div>
            
            <div style={{
                position:'absolute',
                top:300,
                left:150,
                width:50,
                height:200,
                background: `url(${BottomPipImg})`
            }}>

            </div>
        </div>
    )
}

export default Pipe;