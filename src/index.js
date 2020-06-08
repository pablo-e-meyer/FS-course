import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name='Fundamentals of React' exercises={props.exercises[0]}/>
      <Part name='Using props to pass data' exercises={props.exercises[1]}/>
      <Part name='State of a component' exercises={props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const exercises = [10, 7, 14]
  return (
    <div>
      <Header course='Half Stack application development'/>
      <Content exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

ReactDOM.render(
      <App />,
  document.getElementById('root')
);