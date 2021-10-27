import {Router} from 'express';
const router = Router();
import {getOperationsById,createOperations,editOperations,deleteOperations} from '../controllers/operations.controller';

router.get('/operations/:userId',getOperationsById);
router.post('/operations/:userId', createOperations);
router.put('/operations/:id', editOperations);
router.delete('/operations/:id', deleteOperations);

export default router;