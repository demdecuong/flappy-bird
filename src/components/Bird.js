import React from 'react'
import BirdImg from '../img/bird.png'
import {connect} from 'react-redux'

const Bird = ({y,rotation}) => {
    return(
        <div
            style={{
                position:'absolute',
                top:y,
                left:120,
                width:40,
                height:40,
                background: `url(${BirdImg})`,
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 200ms,top 200ms',
            }}
        >

        </div>
    )
}


const mapStateToProps = ({Bird}) => ({y: Bird.y, rotation: Bird.rotation});
const mapDispatchToProps = {};

export default connect(mapStateToProps,mapDispatchToProps) (Bird);