// import { useState } from 'react';


import { Wrapper } from './Home.styles';

export type data = {
  id: number;
  name: string;
  capital: string;
  region: string;
  flag: string;
  population: number;
  lenguage: string[];
};


function Home(): JSX.Element {
  return (
    <>
      <Wrapper>
        <h1>ya esta</h1>
      </Wrapper>
    </>
  );
}

export default Home;