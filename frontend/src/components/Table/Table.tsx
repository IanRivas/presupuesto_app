import React from 'react';
import {Wrapper} from './Table.styles';
import { operation } from '../../views/Home/Home';

// icons
import {BsTrashFill} from 'react-icons/bs';
import {BsPencilFill} from 'react-icons/bs';
import {IoAddCircleSharp} from 'react-icons/io5';


type props = {
    operations: Array<operation>;
    handle: () => void;
    isTheme: boolean;
}

function Table({operations,handle,isTheme}:props) {
    return (
        <Wrapper>
            <h2>Total: 1000$</h2>
            <div>
                <p>Concepto</p>
                <p>Monto</p>
                <p>Fecha</p>
                <p>Tipo</p>
                <button onClick={handle}><span>Add</span> 
                    <IoAddCircleSharp size={20}/>
                </button>
            </div>
            { operations && operations.map((oper) => (
                <div>
                    <p>{oper.concepto}</p>
                    <p>{oper.monto}</p>
                    <p>{oper.fecha}</p>
                    <p>{oper.tipo}</p>
                    <div className="container-buttons">
                        <button className="edit-btn"> <BsPencilFill size={20} /></button>
                        <button className="delete-btn"> <BsTrashFill size={20} /></button>
                    </div>
                </div>
            ))}
        </Wrapper>
    )
}

export default Table
