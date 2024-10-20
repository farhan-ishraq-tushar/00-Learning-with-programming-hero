import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

function App() {

  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel']

  const singers = [
    {id:1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id:2, name: 'Eva Rahman', age: 38},
    {id:3, name: 'Shuvro Dev', age: 58},
    {id:4, name: 'Pritom Vai', age: 28},
  ]

  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}>

        </Singer>)
      }

      <Actor name={"Luffy"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo>
      <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17,000"></Device>
      <Device name="watch" price="5,000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="8" score="81"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am {person.name} a person with age: {age + money}</h3>
}

// Use of destructuring method
const {grade, score} = {grade: '7', score: '99'};

function Student({grade, score=0}){
  //here "score = 0" giving the default value of score
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>New Developer</h5>
    </div>
  )
}

export default App
