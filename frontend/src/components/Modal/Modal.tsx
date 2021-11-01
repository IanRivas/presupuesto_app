import React, { Dispatch, SetStateAction} from "react";
import { operation,tipo } from '../../views/Home/Home';

import {Modaldiv} from "./Modal.styles";

type ModalProps = {
  add: Dispatch<SetStateAction<operation[]>>;
  handleModal: () => void;
  isTheme: boolean;
  show: boolean;
};

interface Form extends HTMLFormElement{
  concepto: HTMLInputElement;
  monto: HTMLInputElement;
  fecha: HTMLInputElement;
  tipo: HTMLInputElement;
}

function Modal({ add, handleModal, isTheme, show}: ModalProps) {

  const addOperation = (event: React.ChangeEvent<Form>) => {
    event.preventDefault();
    if (event.target.tipo.value.toLowerCase() === 'ingreso' || event.target.tipo.value.toLowerCase() === 'egreso' ){
      const oper = {
        concepto: event.target.concepto.value,
        monto: event.target.monto.value,
        fecha: event.target.fecha.value,
        tipo: event.target.tipo.value.toLowerCase() as tipo,
      }
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(oper)
      };
      window.fetch('http://localhost:3001/operations/1',requestOptions)
        .then(data => console.log(data))
        .then(() => add((items) => [...items, oper]));
    }
    handleModal();
  };

  return (
    <>
    {show ? 
     (<Modaldiv> 
        <div className="exit" onClick={handleModal}>
          {""}
        </div>
        <section className="modalMain">
          <div>
            <h4>Agregar Operación</h4>
            <button className="closebtn" onClick={handleModal}>
            X
            </button>
          </div>
          <form onSubmit={addOperation} className="inputModal">
            <span>Concepto:</span>
            <input
              name="concepto"
              type="text"
              required
            />
            <span>Monto:</span>
            <input
              name="monto"
              type="number"
              min="1"
              step="any"
              placeholder="$"
              required
            />
            <span>Fecha:</span>
            <input
              name="fecha"
              type="date"
              required
              />
            <span>Tipo:</span>
            <input type="text" name="tipo" placeholder="Ingreso o Egreso" required/>
            <div className="btn-container">
              <button type="submit" className="btnAgregar">
                Agregar
              </button>
            </div>
          </form>
        </section>
      </Modaldiv> ) : null
      }
      </>
      );
    }
    
    export default Modal;
    