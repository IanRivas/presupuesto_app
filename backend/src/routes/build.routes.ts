import {Router} from 'express';
const router = Router();
import {sayHi, buildTables, insertData} from '../controllers/build.controller';

router.get('/',sayHi);
router.get('/build',buildTables);
router.get('/insertData',insertData)

export default router;