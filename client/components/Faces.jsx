import React from 'react'

class Faces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            face: {}
        }
    }

    componentDidMount() {
        setInterval(() => {
            fetch("/face")
            .then((response) => response.json())
            .then((face) =>
            this.setState({
                face: {
                    foreHead: face.ForeHeads,
                    eye: face.Eyes,
                    nose: face.Noses,
                    mouth: face.Mouths
                }
            })
            )
        }, 5000)
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