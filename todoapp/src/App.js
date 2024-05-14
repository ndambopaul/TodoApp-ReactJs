import './App.css';
import FindSum from './components/FindSum';
import Greeting from './components/Greeting';
import MakeButton from './components/MakeButton';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const full_name = "James Doe";
  const a = 117;
  const b = 8;

  const [currentText, setCurrentText] = useState("Stoney")
  const [count, setCount] = useState(0);

  const changeButtonText = () => {
    setCurrentText(prevText => prevText === "Stoney" ? "Fanta" : "Stoney")
  } 

  const increaseCountButton = () => {
    setCount(count + 1)
    console.log("Button Clicked!!")
  }

  const decreaseCountButton = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      
      <Greeting full_name={full_name} />

      <FindSum a={a} b={b}/>

      <MakeButton buttonText={currentText} changeButtonText={changeButtonText}/>

      <Counter increaseCountButton={increaseCountButton} decreaseCountButton={decreaseCountButton}  count={count} />
    </div>
  );
}

export default App;
