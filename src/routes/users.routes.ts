import {Router} from 'express';
const router = Router();
import {createTables, sayHi} from '../controllers/users.controller';


router.get('/',sayHi);
router.get('/createTableUser',createTables)


export default router;