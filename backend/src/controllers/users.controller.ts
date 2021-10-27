import {Request, Response} from 'express';
import {pool} from '../database';
import {QueryResult} from 'pg';

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
