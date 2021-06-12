import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './src/components/navBar.jsx'
import Header from './src/components/header.jsx'
import Body from './src/components/body.jsx'
import Footer from './src/components/footer.jsx'


let headerData = {

    stops:  [{
      isNext: true,
      stop: "Napoli",
      time: "14:30"
    }, 
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    },
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    },
    {
      isNext: false,
      stop: "Napoli",
      time: "14:30"
    }]

}

let bodyData = {

    media: [{
      mediaImage: "../assets/pompei.jpg",
      mediaTitle: "Is A nice place",
      mediaDescription: "and here some descriptions will come"
        },{
          mediaImage: "../assets/pompei.jpg",
          mediaTitle: "Is A nice place",
          mediaDescription: "and here some descriptions will come"
        }, {
          mediaImage: "../assets/pompei.jpg",
          mediaTitle: "Is A nice place",
          mediaDescription: "and here some descriptions will come"
        }, ]
}


class App extends React.Component {
  
  render() {
    return ( 
    <React.Fragment>
    <NavBar />
    <Header data={headerData}/>
    <Body   data={bodyData}/>
    <Footer />
    </React.Fragment>
  
    )
  }
}



// Render App
ReactDOM.render(
  <App />,
  document.getElementById('root')
)