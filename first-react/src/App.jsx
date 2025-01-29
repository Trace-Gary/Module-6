// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
// import PropsDisplayer from './components/PropsDisplayer'
// import City from './components/City'
// import Address from './components/Address'
// import Pet from './components/Pet'
// import Greeting from './components/Greeting'
// import FullName from './components/FullName'
// import ComplexComment from './components/ComplexComment'
// import FancyBox from './components/FancyBox'
// import MoviesList from './components/MoviesList'
import BigCats from './components/BigCats'
// import MoodChanger from './components/MoodChanger'
// import Emoji from './components/Emoji'
// import BirthdayTranslator from './components/BirthdayTranslator'
// import Weather from './components/Weather'
// import LoginForm from './components/LoginForm'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>

//     // Module 6 - Slide 16









//   )
// }

// export default App


/*const spiderman = {
  name: 'Spiderman', 
  alterEgo: 'Peter Parker', 
  catchPhrase: 'With great power comes great responsibility'
}

const spideyJSX = (<div>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
</div>) */


// function ExampleComponent() {
//   return (
//     <div className="ExampleComponent componentBox">
//     <h1>My Example Component</h1>
//     <p>My first React component!</p>
//     </div>
//   )
// }

// function ExampleComponent2() {
//   return (
//     <div className="ExampleComponent componentBox">
//     <h1>My Example Component 2</h1>
//     <p>My first React component!</p>
//     </div>
//   )
// }






// function App() {
//   return (
//     <div className="App">
//     {/*spideyJSX}
//     {spideyJSXFragment*/}
//     <ExampleComponent/>
//     <ExampleComponent2/>
//     </div>
//   )
// }  





// function Welcome(props) { // custom Welcome component
//   return (
//   <div className="Welcome componentBox">
//     {/* if the 'name' prop exists, render it on the screen */}
//     <h3>Welcome {props.name}!</h3>
//     {/* if this component has children, render them here */}
//     {props.children}
//     </div>
//   )
// }
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: { // author is also an object
//   name: 'Hello Kitty',
//   avatarUrl: 'https://placekitten.com/g/64/64',
//   },
//   };


function App() {
  return (
    <div className="App">
    {/*spideyJSX}
    {spideyJSXFragment*/}
    {/* <Welcome name="students">
    <p>Children of Welcome Component</p>
    </Welcome> */}
    {/* <PropsDisplayer/>
    <PropsDisplayer myProp="first prop"/>
    <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}
    {/* <PropsDisplayer name="Harry Styles" age={29}/>
    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/>
    <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> */}
    {/* <City name="Syndey" state="VIC"/> */}
    {/* <City name="Chicago" state="Illinois" country="USA"/> */}
    {/* <Address street="380 Random" zipcode="12"/> */}
    {/* <City name="Newcastle">
      <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
      <div><strong>Population:</strong> 322,278 (2016)</div>
    </City> */}
    {/* <Pet name="random" type="random type" colour="brown"/> */}
    {/* <Greeting name="John">
    <div>This is the child text</div>
    </Greeting> */}
    {/* <FullName first="Kendrick" middle="Mustarrrrrrd" last="Lamar"/> */}
    {/* <ComplexComment author={comment.author}
    date={comment.date}
    text={comment.text}/> */}
    {/* <MoviesList/> */}
    <BigCats/>
    {/* <MoodChanger/> */}
    {/* <Emoji/> */}
    {/* <BirthdayTranslator/> */}
    {/* <Weather/> */}
    {/* <LoginForm /> */}
    
    </div>
  )
}



export default App;