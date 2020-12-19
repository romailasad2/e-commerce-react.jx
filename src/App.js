import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Homepage from './Components/Pages/homepage/homepage.component';

const Hats = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const Jackets = () => (
  <div>
    <h1>JACKETS</h1>
  </div>
)

const Sneakers = () => (
  <div>
    <h1>SNEAKERS</h1>
  </div>
)

const Womens = () => (
  <div>
    <h1>WOMENS STORE</h1>
  </div>
)

const Mens = () => (
  <div>
    <h1>MENS STORE</h1>
  </div>
)

// const HomePage = props => {
//   console.log(props)
//   return(
//     <div>
//     <Link to='/topics'>Topics</Link>
//     <h1>Home Page</h1>
//   </div>
//   )
// }
// const Topics = props => {
//   console.log(props);
//   return(<div>
//     <Link to={`/topics/${1}`}> Topic id</Link>
//     <h1>Topics Page</h1>
//     <Link to={`${props.match.url}/2`}>Topic 2</Link>
//     <Link to={`${props.match.url}/3`}>Topic 3</Link>
//     <Link to={`${props.match.url}/4`}>Topic 4</Link>

//   </div>)
// }
// const TopicsDetail = props => {
//   console.log(props)
//   return(<div>
//         <Link to='/'>homepage</Link>
//     <h1>Topic Detail: {props.match.params.topicId}</h1>
//   </div>)
// }

class App extends Component{
  render(){
    return(
      <div>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop/hats' component={Hats} />
        <Route exact path='/shop/jackets' component={Jackets} />
        <Route exact path='/shop/sneakers' component={Sneakers} />
        <Route exact path='/shop/womens' component={Womens} />
        <Route exact path='/shop/mens' component={Mens} />
      </div>
    )
  }
}

export default App;