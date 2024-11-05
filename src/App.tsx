import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { create } from 'zustand';

type State = {
  bears: number;
};

type Action = {
  increaseBear: (by: number) => void;
};

export const useStore = create<State & Action>()((set) => ({
  bears: 0,
  increaseBear: (by) => set((state) => ({ bears: state.bears + by })),
}));

function App() {
  const bears = useStore((state) => state.bears);
  const increaseBear = useStore((state) => state.increaseBear);

  return (
    <div>
      <div>🐻: {bears}</div>
      <button onClick={() => increaseBear(1)}>+ 1</button>
    </div>
  )
}

export default App
