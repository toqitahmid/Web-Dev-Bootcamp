// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './Todo.jsx'
import Student from './student.jsx';

function App() {
  // const [count, setCount] = useState(0)

  const s = ['Araf','Toqi', 'Tahmid'];

  return (
    <>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Name></Name>
    <Name></Name>
    <Name></Name>
    <UserInfo name="Araf"></UserInfo>
    <UserInfo name="Toqi"></UserInfo>
    <ToDo task = "Learn Js" isDone={true}></ToDo>
    <ToDo task = "Learn React" isDone={false}></ToDo>

    {
    s.map(student => <Student student ={student}></Student>)
    }

    </>
  )
}

function Person(){
  return(
    <p className='page'>This is My Only React Web Page</p>
  )
  
}

const personStyle =  {
  color: 'red',
  border: '2px solid white',
  padding: '10px',
  margin: '5px',
}

function Name(){
  const name = "toqi";
  return(
    <p style={personStyle}>Dev Name : {name}</p>
  )
}

const styleUserName = {
  border: "2px solid green",
  color: 'purple',
  padding: '10px',
  margin: '5px',
  // Text: 'bold'
}

function UserInfo (Props) {
  console.log(Props);
  return(
    <p style={styleUserName}>Developer: {Props.name}</p>
  )
}
export default App
