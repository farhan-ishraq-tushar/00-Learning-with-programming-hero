import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

// Function with parameter
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    // <></> is called fragment. It can be used instead of "div"
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      
      {/* 
      Event handler on   HTML

      { <button onclick="handleClick()">Click Me</button> } 

       */}
      
      {/* Event handler on React */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('third clicked') }}>third</button>

      {/* Calling function "addToFive(num)" with parameter "num". In this case the function "addToFive(num)" must be wrapped with an arrow function otherwise it will be called by default(with out going through onCLick functionality.). */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
