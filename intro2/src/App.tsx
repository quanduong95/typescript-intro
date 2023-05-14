import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Section from './components/Section';

function App() {
  return (
    <>
      <Heading title={'This is a title'} />
      <Section>this is a chilren</Section>
    </>
  );
}

export default App;
