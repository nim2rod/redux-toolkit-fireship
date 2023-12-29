// npx create-react-app redux  
// npm install @reduxjs/toolkit react-redux

import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTopping, toggleGluten } from './pizzaSlice';

function App() {
  const pizza = useSelector(state => state.pizza)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pizza</h1>
        {pizza.gluten ? <>gluten</> : <>gluten free</>}
        {pizza.topping.map(topping => (
          <div key={topping}>{topping}</div>
        ))}

        <button onClick={() => dispatch(addTopping('pepperoni'))}>Add Pepperoni</button>
        <button onClick={() => dispatch(addTopping('mashroom'))}>Add mashroom</button>
        <button onClick={() => dispatch(addTopping('onion'))}>Add onion</button>
        <button onClick={() => dispatch(toggleGluten())}>toggle gluten</button>
      </header>
    </div>
  );
}

export default App;
