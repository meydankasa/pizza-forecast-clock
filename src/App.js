import { useEffect, useState } from "react";
import './App.scss';
import swimmLogo from '../src/assets/logo.svg';
import pizzaImg from '../src/assets/pizza.png';
import { getBugsNumber } from "../src/service/action";
import { calculateMinuteUntilFive, calcCompletionChances } from "../src/utils";


function App() {
  const [numberOfBugs, setNumberOfBugs] = useState(0);

  useEffect(() => {
    getBugsNumber().then((res) => {
      setNumberOfBugs(res[0])
    });
    calcCompletionChances(numberOfBugs)
  }, []);

  const generateRaindropStyle = () => {
    return {
      opacity: Math.max(0.2, Math.random()),
      width: getRandomInt(10, 20),
      height: getRandomInt(30, 60),
      top: getRandomInt(0, window.innerHeight - 60),
      left: getRandomInt(0, window.innerWidth - 20),
    }
  }

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div>
      <div className="logo-swimm">
        <img src={swimmLogo} alt="swimm logo" />
      </div>
      <div className="status-information">
        <h3> Rainy with {calcCompletionChances(numberOfBugs)} change for Pizza </h3>
        <span> {numberOfBugs} bugs found and {calculateMinuteUntilFive()} minutes untill 17:00 </span>
      </div>
      <div className="pizza-meter">
        <img src={pizzaImg} alt="pizza img" />
        <div className="red-clock-dial">  </div>
      </div>
      {
        new Array(numberOfBugs).fill('').map((d, index) => (
          <div
            className="rain-drop"
            key={index}
            style={generateRaindropStyle()}
          ></div>
        ))
      }
    </div>
  );
}

export default App;
