import React from 'react'
import BottomPipImg from '../img/bottom_pipe.png'
import TopPipImg from '../img/top_pipe.png'

import { connect } from 'react-redux'

const Pipe = ({ x, pipes }) => {
    return (
        <div style={{ position: 'relative' }}>
            {
                pipes.map(({ topHeight }, i) => (
                    <div
                        key={`pipe-${i}`}
                        style={{
                            position: 'relative',
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: x + i * 200,
                            width: 50,
                            height: topHeight,
                            background: `url(${TopPipImg})`,
                            backgroundPosition: 'bottom',
                            transition: 'left 200ms',
                        }}>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: topHeight + 100,
                            left: x + i * 200,
                            width: 50,
                            height: 200,
                            background: `url(${BottomPipImg})`,
                            transition: 'left 200ms',
                        }}>

                        </div>
                    </div>
                ))}
        </div>
    )
}

const mapStateToProps = ({Pipe}) => ({ x: Pipe.x, pipes: Pipe.pipes })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);