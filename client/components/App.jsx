import React from 'react'

import Faces from './Faces'

const App = props => {
    const {width, height} = props

    return (
        <div width={width/2} height={height/2} className='container'>
            <Faces />
        </div>
    )
}

export default App