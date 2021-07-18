import { data } from 'autoprefixer';
import React, { Component } from 'react';
import styles from './css/body-style.css'
import $ from 'jquery'

const video = false 

function CreateMediaVideo(props) {
    const media = props.data
    
    if (media == null) {
         return null
    }

    const url = media.Media
    const embbended = url.split('=')[1]
    return  (
    <React.Fragment>
    <h1 className={styles.contentMediaTitle}>Conosci {media.Name}</h1>
    <iframe width="100%" height="400px" id="video-youtube" src={`https://www.youtube.com/embed/${embbended}?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </React.Fragment>
    )   
}

class Media extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }

    handleUpdate(event) {  
        const data = event.data.media
        const objc = event.data.objc
        const destination = document.getElementsByClassName("carousel-item active")[0].id
        const active = data.find( (media) => { 
            return media.Name == destination 
        })  
        objc.setState({
            active: active
        })
    } 

    componentDidMount() {
        if (this.active == null) {
            const destination = document.getElementById("stop_destination").getAttribute('data')
            console.log(destination)
            const active = this.state.data.find( (media) => { 
                return media.Name == destination 
            })  
            this.setState({
                active: active
            })
        }
        // $('#carouselExampleIndicators').on('slid.bs.carousel',  {media: this.state.data, objc: this}, this.handleUpdate)
    }

    render() {
        return (
        <div className={styles.container}>
        <CreateMediaVideo data={this.state.active}></CreateMediaVideo>
        </div>
        
        )
    }
}

// Here starts all the logic of the body
export default class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data
        };   
    }

    render() {
        return (
            <Media data={this.state.data}/>
        )
    }
}   