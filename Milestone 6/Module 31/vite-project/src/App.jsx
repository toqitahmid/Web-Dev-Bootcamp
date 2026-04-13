import './App.css'
import Student from './Props';

function App() {

  return (
    <>
      <section id="center">
        <div>
          <h1>React Core Concepts</h1>
          <Person name = 'Araf' id = '21'></Person>
          <Person name = 'Toqi' id = '18'></Person>
          <Person name = 'Sams' id = '16'></Person>
          <br />
          <br />
          <Student name = 'Farhan' isPass = {true}></Student>
          <Student name = 'Sami' isPass = {false}></Student>
          <Student name = 'Anjum' isPass = {true}></Student>
        </div>
      </section>
    </>
  )
}

function Person({name, id}){

  const age = 21;
  return(
    <div className='person'>
    <p>This is {name}</p>
    <p>His age is : {age}</p>
    <p>Id : {id}</p>
    <br />
    </div>
  )
}

export default App
