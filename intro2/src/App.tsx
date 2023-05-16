import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

const items: string[] = ['nam', 'hoang', 'bao'];

const render = (item: string) => {
  return <span>{item}</span>;
};

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title={'This is a title'} />
      <Section>this is a chilren</Section>
      <Counter setCount={setCount}>{count}</Counter>
      <List
        items={items}
        render={render}
      />
    </>
  );
}

export default App;
