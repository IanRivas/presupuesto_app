import {Request, Response} from 'express';
import {pool} from '../database';

export const sayHi = (req:Request,res:Response) => {
    res.send('HOLA MUNDO');
}

export const buildTables = async (req:Request,res:Response) => {
    try {
        await pool.query(
            `CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,name VARCHAR(40) NOT NULL,email TEXT NOT NULL UNIQUE);
             CREATE TABLE IF NOT EXISTS operations(
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                concepto VARCHAR(40) NOT NULL,
                monto MONEY NOT NULL,
                fecha DATE NOT NULL,
                tipo VARCHAR(10) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES users(id)
            );`, (err,res) => console.log(err,res));
        res.redirect('/insertData');
    } catch (e) {
        console.log(e)
        return res.send('Internal Error');
    }
}
export const insertData = async (req:Request,res:Response): Promise<Response> => {
   try {
     await pool.query(`INSERT INTO users(name, email) VALUES ($1, $2),($3, $4);`,
            ['myUser','myUser@test.com','lucas', 'lucas@gmail.com']);
     return res.send('Tables users and operations created and Inserted Data to Tables');
   } catch (e) {
       console.log(e)
       return res.send('Internal Error');
   }
}