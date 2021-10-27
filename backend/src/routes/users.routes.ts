import {Router} from 'express';
const router = Router();
import {getUsers, createUsers, getUserById, editUsers, deleteUsers} from '../controllers/users.controller';

router.get('/users',getUsers);
router.get('/users/:id', getUserById);
router.post('/users',createUsers);
router.put('/users/:id',editUsers);
router.delete('/users/:id', deleteUsers);


export default router;