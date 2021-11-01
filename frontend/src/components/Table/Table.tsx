import {Dispatch, SetStateAction} from 'react';
import {Wrapper} from './Table.styles';
import { operation } from '../../views/Home/Home';

// icons
import {BsTrashFill} from 'react-icons/bs';
import {BsPencilFill} from 'react-icons/bs';
import {IoAddCircleSharp} from 'react-icons/io5';


type props = {
    handleModal: () => void;
    isTheme: boolean;
    operations: Array<operation>;
    setOperations: Dispatch<SetStateAction<operation[]>>;
}

function Table({handleModal, isTheme, operations, setOperations}:props) {

    const deleteOperation = (id: number | undefined) => {
        const requestOptions = { method: 'DELETE'};
        window.fetch(`http://localhost:3001/operations/${id}`,requestOptions)
            .then(data => console.log(data))
            .then(() => setOperations(prev => prev.filter(oper => oper.id !== id)));
    }

    return (
        <Wrapper>
            <h2>Total:  ${ operations.length !== 0 ? 
                operations.map(v => Number(v.monto.replace(/\$|,/g,'')))
                    .reduce((acum,current) => acum + current ) : 0}
            </h2>
            <div>
                <p>Concepto</p>
                <p>Monto</p>
                <p>Fecha</p>
                <p>Tipo</p>
                <button onClick={handleModal}><span>Add</span> 
                    <IoAddCircleSharp size={20}/>
                </button>
            </div>
            { operations && operations.map((oper, index) => (
                <div key={index}>
                    <p>{oper.concepto[0].toUpperCase() + oper.concepto.slice(1)}</p>
                    <p>${oper.monto}</p>
                    <p>{oper.fecha}</p>
                    <p>{oper.tipo[0].toUpperCase() + oper.tipo.slice(1)}</p>
                    <div className="container-buttons">
                        <button className="edit-btn"> <BsPencilFill size={20} /></button>
                        <button className="delete-btn" onClick={() => deleteOperation(oper.id)}> <BsTrashFill size={20} /></button>
                    </div>
                </div>
            ))}
        </Wrapper>
    )
}

export default Table
