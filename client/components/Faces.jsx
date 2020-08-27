import React from 'react'

class Faces extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <>
                <div id='fh' className='faces'>
                    {/* Forehead */}
                    <p>Hello World</p>
                </div>
                <div id='eyes' className='faces'>
                    {/* Eyes */}
                </div>
                <div id='nose' className='faces'>
                    {/* Nose */}
                </div>
                <div id='bottom' className='faces'>
                    {/* Mouth/Chin */}
                </div>
            </>
        )
    }
}

export default Faces