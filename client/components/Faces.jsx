import React from 'react'

class Faces extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            face: {}
        }
    }

    fetchFace = () => {
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
      }

    componentDidMount() {
        this.fetchFace()
        setInterval(() => {
            this.fetchFace()
        }, 5000)
    }

    render() {
        const { foreHead, eye, nose, mouth } = this.state.face

        if(!Object.keys(this.state.face).length) return null
        
        return (
            <>
                <div id='fh' className='faces'>
                    <img src={`/images/ForeHeads/${foreHead}`} alt="foreHead"/>
                </div>
                <div id='eyes' className='faces'>
                    <img src={`/images/Eyes/${eye}`} alt=""/>
                </div>
                <div id='nose' className='faces'>
                    <img src={`/images/Noses/${nose}`} alt=""/>
                </div>
                <div id='bottom' className='faces'>
                    <img src={`/images/Mouths/${mouth}`} alt=""/>
                </div>
            </>
        )
    }
}

export default Faces