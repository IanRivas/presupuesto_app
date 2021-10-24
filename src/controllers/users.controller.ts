import {Request, Response} from 'express';
import {pool} from '../database';

export const sayHi = (req:Request,res:Response) => {
    res.json({hola:'mundo'})
}

export const createTables = async (req:Request,res:Response) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,name VARCHAR(40),email TEXT);',(err,res) => {
            console.log(err,res);
        })
        await pool.query(
        'INSERT INTO users(name, email) VALUES ($1, $2),($3, $4);',
        ['joe','joe@ibm.com','ryan', 'ryan@faztweb.com']);

        res.send('HOLA MUNDO Docker again');
    } catch (e) {
        console.log(e)
    }
}
