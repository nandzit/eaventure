import React, { Component } from 'react';
import styles from './css/body-style.css'

const video = false 

class Media extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mediaTitle : props.mediaTitle,
            mediaDescription: props.mediaDescription
        };
    }

    render() {
        const mediaImg = <img src="../assets/pompei.jpg" className={styles.mediaImage} ></img>
        return (
            <div className={styles.contentMediaHeader}>
                <h1 className={styles.contentMediaTitle}>{this.state.mediaTitle}</h1>
                <p className={styles.contentMediaHeaderDescription}>{this.state.mediaDescription}</p>
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
    render() {

        const title = "Information Title"
        const description = "Nullam fermentum a dui facilisis semper. Cras vel orci id tortor congue dictum ut sed dui. Pellentesque posuere pretium felis, id sodales nisl mollis ac. Vestibulum quis sapien eu tortor dapibus rhoncus. Morbi dignissim orci tellus, eget viverra mi elementum in. Duis sed nisi et metus tristique facilisis a non sem. Nulla eget diam in tortor mattis ultricies. Pellentesque enim nibh, laoreet vestibulum purus sit amet, euismod pulvinar urna. Sed ut dolor nec augue lacinia tincidunt. Nunc ipsum tellus, tincidunt pharetra eleifend eget, sagittis et ligula. Sed id faucibus leo. "

        return (
            <div className={styles.container}>
                <h1 className={styles.videoTitle}>Cosa fare a Pompei?</h1>
                <div className={styles.mediaContainer}>
                <div className={styles.boxMedia}>
                    <Media mediaTitle={title} mediaDescription={description}/>
                    {/* <ContentMedia /> */}
                </div>
                <div className={styles.boxMedia}>
                    <Media mediaTitle={title} mediaDescription={description}/>
                    {/* <ContentMedia /> */}
                </div>
                <div className={styles.boxMedia}>
                    <Media mediaTitle={title} mediaDescription={description}/>
                    {/* <ContentMedia /> */}
                </div>  
                </div>
            </div>
        )
    }
}