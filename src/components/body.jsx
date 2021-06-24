import { data } from 'autoprefixer';
import React, { Component } from 'react';
import styles from './css/body-style.css'

const video = false 

let media ={
    "medias": { 
    "mediaTitle": "Cosa Posso fare a Pompei?",
     "list" : [ 
        {
        "type": "article",
        "title": "Why is Pompeii famous? ",
        "description" : "Pompeii was destroyed because of the eruption of Mount Vesuvius on August 24, 79 CE. Just after midday on August 24, fragments of ash and other volcanic debris began pouring down on Pompeii, quickly covering the city to a depth of more than 9 feet (3 metres). Pyroclastic material—a fluidized mixture of hot rock fragments, hot gases, and entrapped air moving at high speed in thick dark clouds that hug the ground—reached the city on the morning of August 25 and soon asphyxiated those who had not already been killed. Additional pyroclastic flows and rains of ash followed, adding at least another 9 feet of debris.",
        "date": "Some data here",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/eaventurebucket.appspot.com/o/Pompei%2Fpompei02.jpg?alt=media&token=f1ebdd5c-3002-4e6e-9215-3f08a94722a3",
        "category": "atraction"
    },
    {
        "type": "article",
        "title": "Where was Pompeii located? ",
        "description" : "The ancient Roman city of Pompeii was located in what is now the Campania region of Italy, southeast of Naples. It was at the southeastern base of Mount Vesuvius and was built on a spur formed by a prehistoric lava flow to the north of the mouth of the Sarnus (modern Sarno) River. Pompeii was destroyed by the violent eruption of Mount Vesuvius on August 24, 79 CE.",
        "date": "Some data here",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/eaventurebucket.appspot.com/o/Pompei%2Fpompei01.jpg?alt=media&token=68c0a457-54e9-4581-a9a3-82c818d250d2",
        "category": "atraction"
    },
    {
        "type": "article",
        "title": "How does Pompeii look today?",
        "description" : "The remains of Pompeii’s city walls are 2 miles (3 km) in circumference, and they enclose an area of about 163 acres (66 hectares). Several city gates have been excavated. There are many remains of public buildings, generally grouped in three areas: the Forum, located in the large level area to the southwest; the Triangular Forum, standing on a height at the edge of the south wall overlooking the bay; and the Amphitheatre and Palaestra, in the east. Hundreds of private homes of various architectural styles have also been excavated at Pompeii. ",
        "date": "Some data here",
        "imageURL": "https://firebasestorage.googleapis.com/v0/b/eaventurebucket.appspot.com/o/Pompei%2Fpompei03.jpg?alt=media&token=4cde005d-0934-4390-a878-aa00429b465f",
        "category": "atraction"
    }
    ]
    }
}

function MontMedia (props) {

    if (props.mediaContent == null) {
        return null
    }

    data = props.mediaContent.medias
    console.log(data)
  
    return (
        <div>
        <h1 className={styles.videoTitle}>{data.mediaTitle}</h1>
        <div className={styles.mediaContainer}>
        {   
                data.list.map((item, i) => (   
                <div className={styles.boxMedia} key={i}>   
                <div className={styles.contentMediaHeader}>
                <h1 className={styles.contentMediaTitle}>{item.title}</h1>
                <p className={styles.contentMediaHeaderDescription}>{item.description}</p>
                 <img src={item.imageURL} className={styles.mediaImage} ></img>
                </div>
                </div>
            ))
        }
        </div>
        </div>
    ) 
}

class Media extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null
        };
    }

    componentDidMount () {
        // The id Will come from the App components
        // if (this.state.data == null ) {
        //    fetch("https://b817bb7b-6d2e-4c13-9ff5-28542b88a535.mock.pstmn.io/media/id")
        //    .then(res => res.json())
        //    .then((data) => { this.update(data) })
        // }

        // setTimeout(() => {
        //     this.update(media)
        // }, 4000);
    }

    update(data) {
        this.setState({
            data: data
        })
    }

    render() {
        return (
        <div className={styles.container}>
        <MontMedia mediaContent={this.state.data} />   
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
        return (
            <Media/>
        )
    }
}