import { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import Table from '../../components/Table';

import { Wrapper } from './Home.styles';

export type tipo = 'ingreso' | 'egreso'

export interface operation  {
  id?: number;
  concepto: string;
  monto: string;
  fecha: string;
  tipo: tipo;
};

type HomeProps = {
  isTheme: boolean;
}

function Home({isTheme}:HomeProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [operations, setOperations] = useState<operation[]>([]);

  useEffect(()=>{
    window.fetch('http://localhost:3001/operations/1')
      .then(res => res.json())
      .then(data => setOperations(data));
  
  },[])

  const handleModal = () => {
    setShow(!show);
  }
  return (
    <Wrapper>
      <Modal show={show} handleModal={handleModal} isTheme={isTheme} add={setOperations} />
      <Table operations={operations} handleModal={handleModal}  isTheme={isTheme} setOperations={setOperations} />
    </Wrapper>
  );
}

export default Home;