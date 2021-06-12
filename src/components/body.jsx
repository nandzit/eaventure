import React, { Component } from 'react';
import styles from './css/body-style.css'

const video = false 

class Media extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        };
    }

    render() {
        const mediaImg = <img src={this.state.data.mediaImage} className={styles.mediaImage} ></img>
        return (
            <div className={styles.contentMediaHeader}>
                <h1 className={styles.contentMediaTitle}>{this.state.data.mediaTitle}</h1>
                <p className={styles.contentMediaHeaderDescription}>{this.state.data.mediaDescription}</p>
                {mediaImg}
            </div>
        ) 
    }
}

class ContentMedia extends Component {
    render( ) {
        const mediaVideo =  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pbbui_S8JIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        return (
          mediaImg
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
            <div className={styles.container}>
                <h1 className={styles.videoTitle}>Cosa fare a Pompei?</h1>
                <div className={styles.mediaContainer}>
                {
                    this.state.data.media.map((item, i) => (
                        <div className={styles.boxMedia} key={i}>
                        <Media data={item}/>
                    </div>
                    ))
                } 
                </div>
            </div>
        )
    }
}