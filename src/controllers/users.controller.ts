import {Request, Response} from 'express';
import {pool} from '../database';
import { QueryResult } from 'pg';

export const sayHi = (req:Request,res:Response) => {
    res.send('HOLA MUNDO');
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

export const getUsers = async (req:Request,res:Response): Promise<Response> => {
    try {
        const {rows}:QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}
export const getUserById = async (req:Request,res:Response): Promise<Response> => {
    try {
        const id= req.params.id;
        const {rows} = await pool.query('SELECT * FROM users WHERE id = $1',[id]);
        return res.status(200).json(rows);
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}


export const createUsers = async (req:Request,res:Response): Promise<Response> => {
    try {
        const {name,email} = req.body;
        await pool.query('INSERT INTO users(name,email) VALUES($1,$2)',[name,email]);
        return res.status(200).json({
            message: 'User created successfully',
            user: {
                name,
                email
            }
        });
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}

export const editUsers = async (req:Request,res:Response): Promise<Response> => {
    try {
        const id = Number(req.params.id);
        const {name,email} = req.body;
        await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3',[name,email,id]);
        return res.status(200).json({
            message: 'User Updated successfully',
            user: {
                name,
                email
            }
        });
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}

export const deleteUsers = async (req:Request,res:Response): Promise<Response> => {
    try {
        const id = Number(req.params.id);
        await pool.query('DELETE FROM users WHERE id = $1',[id]);
        return res.status(200).send('User deleted Successfully');
    } catch (e) {
        console.log(e);
        return res.send('Internal Error');
    }
}
