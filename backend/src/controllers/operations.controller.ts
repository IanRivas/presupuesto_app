import {Request, Response} from 'express';
import {pool} from '../database';
import { QueryResult } from 'pg';

export const getOperationsById = async (req:Request,res:Response): Promise<Response> => {
    try {
        const userId = req.params.userId;
        const {rows}:QueryResult = await pool.query(`SELECT * from operations WHERE user_id = $1;`,[userId])
        return res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}
export const createOperations = async (req:Request,res:Response): Promise<Response> => {
    try {
        const userId = req.params.userId;
        const {concepto,monto,fecha,tipo} = req.body;
        await pool.query(
            `INSERT INTO operations(user_id,concepto,monto,fecha,tipo) 
            VALUES($1,$2,$3,$4,$5)`, [userId,concepto,monto,fecha,tipo])
        return res.status(200).send('operation created successfully');
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}
export const editOperations = async (req:Request,res:Response): Promise<Response> => {
    try {
        const id = req.params.id;
        const {concepto,monto,fecha,tipo} = req.body;
        await pool.query(
           `UPDATE operations 
            SET concepto = $1, monto = $2, fecha = $3 
            WHERE id = $5;`,[concepto,monto,fecha,tipo,id])
        return res.status(200).send('operations updated successfully');
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}
export const deleteOperations = async (req:Request,res:Response): Promise<Response> => {
    try {
        const id = req.params.id;
        await pool.query(`DELETE FROM operations WHERE id = $1`,[id])
        return res.status(200).send('operations deleted successfully');
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}