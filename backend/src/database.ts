import {Pool} from 'pg';
import config from './config/config';

export const pool = new Pool(config.DB);

//Pool emitters


// pool.on('remove', () => {
//   console.log('Disconnected a client from the database');
// });

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });
    

