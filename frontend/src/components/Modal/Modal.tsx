import React, {useRef, useState} from "react";

import {Modaldiv} from "./Modal.styles";

type ModalProps = {
  show: boolean;
  handle: () => void;
  // add: (c) => void;
  isTheme: boolean;
};

function Modal({show/* , add */, handle,isTheme }: ModalProps) {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const commentsRef = useRef<HTMLInputElement | null>(null);
  const contactRef = useRef<HTMLInputElement | null>(null);
  const [textName, setTextname] = useState("");
  const [textComment, setTextcomment] = useState("");
  const [textContact, setTextContact] = useState("");

  // const addCandidate = () => {
  //   const c: Candidate | null = {
  //     name: nameRef.current?.value,
  //     step: "Envié CV",
  //     contacto: contactRef.current?.value,
  //     comments: commentsRef.current?.value,
  //   };

  //   add(c);
  //   let item: string | null = "";
  //   let itemN = [];

  //   item = localStorage.getItem("postulaciones");
  //   if (item !== null) {
  //     itemN = JSON.parse(item);
  //   }
  //   itemN.push(c);
  //   localStorage.setItem("postulaciones", JSON.stringify(itemN));
  //   setTextname("");
  //   setTextcomment("");
  //   setTextContact("");
  //   handle();
  // };

  return (
    <>
    {show ? 
     (<Modaldiv> 
        <div className="exit" onClick={handle}>
          {""}
        </div>
        <section className="modalMain">
          <div>
            <h4>Agregar Postulación</h4>
            <button className="closebtn" onClick={handle}>
            X
            </button>
          </div>
          <div className="inputModal">
          <span>Concepto:</span>
          <input
            ref={nameRef}
            type="text"
            value={textName}
            onChange={(e) => setTextname(e.target.value)}
          />
          </div>
          <div className="inputModal">
          <span>Monto:</span>
          <input
            ref={contactRef}
            type="number"
            value={textContact}
            min="1"
            step="any"
            placeholder="$"
            onChange={(e) => setTextContact(e.target.value)}
          />
          </div>
          <div className="inputModal">
          <span>Fecha:</span>
          <input
            ref={commentsRef}
            type="date"
            value={textComment}
            onChange={(e) => setTextcomment(e.target.value)}
            />
          <span>Tipo:</span>
          <input type="text" name="IngEgr" list="datalist-dogs" placeholder="Ingreso o Egreso" />
          <datalist id="datalist-dogs">
              <select name="IngEgr">
                  <option>Ingreso</option>
                  <option>Egreso</option>
              </select>
          </datalist>

          </div>
          {/* <button className="btnAgregar" onClick={addCandidate}>
          Agregar
          </button> */}
        </section>
      </Modaldiv> ) : null
      }
      </>
      );
    }
    
    export default Modal;
    