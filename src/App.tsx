import { FC } from 'react';
import CounterApp from './CounterApp';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>React, useReducer</h1>
      <CounterApp />
    </div>
  );
};
