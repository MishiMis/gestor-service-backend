import express from 'express';
import projectController from '../controllers/project.controller.js';


const router = express.Router();

router.post('/create', projectController.create);
router.put('/update/:id', projectController.update);
router.delete('/delete/:id', projectController.delete);
router.get('/getAll', projectController.getAll);
router.get('/getOne/:id', projectController.getOne);

export default router;