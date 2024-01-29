import React, { useReducer } from 'react';

const CounterApp = () => {
  const initialState = {
    counter: 0,
    hasError: '',
  };

  type Action = {
    type: 'increment' | 'decrement';
  };

  const max = 3;
  const min = 0;

  const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          counter: state.counter + 1 > max ? state.counter : state.counter + 1,
          hasError:
            state.counter + 1 > max ? `Counter cannot exceed ${max}` : '',
        };
      case 'decrement':
        return {
          ...state,
          counter: state.counter - 1 < min ? state.counter : state.counter - 1,
          hasError:
            state.counter - 1 < min ? `Counter cannot be less than ${min}` : '',
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.counter}</h1>
      {state.hasError && <p style={{ color: 'red' }}>{state.hasError}</p>}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default CounterApp;
