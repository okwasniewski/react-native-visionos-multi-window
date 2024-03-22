import {create} from 'zustand';

type CounterStore = {
  count: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore & CounterActions>(set => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}));
