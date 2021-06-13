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
         mediaImage: "https://images.musement.com/cover/0002/15/venuehero-pompei-jpg_header-114431.jpeg?q=50&fit=crop&auto=format&w=1024&h=400",
         mediaTitle: "Information Title",
         mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
        },{
          mediaImage: "../src/assets/pompei.jpg",
          mediaTitle: "Information Title",
          mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
        }, {
          mediaImage: "../src/assets/pompei.jpg",
          mediaTitle: "Information Title",
          mediaDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit quam in lectus mollis sodales. Vestibulum odio augue, blandit vitae augue in, posuere interdum odio. Duis nec faucibus ex, non consequat odio. Vestibulum consectetur malesuada quam id luctus. Aliquam malesuada vel lorem pulvinar aliquam. Suspendisse metus orci, varius eget arcu ac, efficitur laoreet odio. Ut ornare vulputate metus, congue lobortis diam accumsan sed. Mauris hendrerit facilisis purus non sollicitudin. "
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