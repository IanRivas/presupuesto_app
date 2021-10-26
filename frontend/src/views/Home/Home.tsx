import { useState } from 'react';
import Modal from '../../components/Modal';
import Table from '../../components/Table';

import { Wrapper } from './Home.styles';

export interface operation  {
  id: number;
  concepto: string;
  monto: number;
  fecha: string;
  tipo: 'ingreso' | 'egreso';
};

const example:Array<operation> = [
  {
    id: 1,
    concepto: 'netflix',
    monto: 800,
    fecha: '21-10-2021',
    tipo: 'egreso'
  },
  {
    id: 1,
    concepto: 'mcdonals',
    monto: 1000,
    fecha: '26-10-2021',
    tipo: 'egreso'
  }
]

type HomeProps = {
  isTheme: boolean;
}

function Home({isTheme}:HomeProps): JSX.Element {
  const [show, setShow] = useState(false);
  const [operations, setOperations] = useState<operation[]>(example);
  const handleModal = () => {
    setShow(!show);
  }
  return (
    <Wrapper>
      <Modal show={show} handle={handleModal} isTheme={isTheme} />
      <Table operations={operations} handle={handleModal}  isTheme={isTheme} />
    </Wrapper>
  );
}

export default Home;