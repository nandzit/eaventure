import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './src/components/navBar.jsx'
import Header from './src/components/header.jsx'
import Body from './src/components/body.jsx'
import Footer from './src/components/Footer.jsx'


class App extends React.Component {
  render() {
    return ( 
    <React.Fragment>
    <NavBar />
    <Header />
    <Body   />
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