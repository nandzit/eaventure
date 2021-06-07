import React, { Component } from 'react';
import styles from './css/body-style.css'

const video = false 

class ContentMediaHeader extends Component {
    render() {
        return (
            <div className={styles.contentMediaHeader}>
                <h1>Informazione Title</h1>
                <p className={styles.contentMediaHeaderDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lacinia est. Donec accumsan ultricies ante, nec dignissim metus gravida ut. Quisque id condimentum lectus, vitae consequat sapien. Duis quis dictum nisi. Morbi posuere commodo tincidunt. Aenean gravida ipsum nec ultricies tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
            </div>
        ) 
    }
}

class ContentMedia extends Component {
    render( ) {
        const mediaVideo =  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pbbui_S8JIM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        const mediaImg =    <img src="../assets/pompei.jpg" className={styles.mediaImage} ></img>
        return (
          mediaImg
        )   
    }
}

// Here starts all the logic of the body
export default class Body extends Component {
    render() {
        return (
            // Container
            <div className={styles.container}>
                <h1 className={styles.videoTitle}>Cosa fare a Pompei?</h1>
                <div className={styles.mediaContainer}>
                <div className={styles.boxMedia}>
                    <ContentMediaHeader />
                    <ContentMedia />
                </div>
                <div className={styles.boxMedia}>
                    <ContentMediaHeader />
                    <ContentMedia />
                </div>
                <div className={styles.boxMedia}>
                    <ContentMediaHeader />
                    <ContentMedia />
                </div>  
                </div>
            </div>
        )
    }
}