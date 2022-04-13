import express from 'express';
const router = express.Router();
import {
    agregarPacintes,
    obtenerPacientes,
    obtenerPaciente,
    actualizarPaciente,
    eliminarPaciente
} from '../controllers/pacienteController.js'
import checkAuth from '../middleware/authMiddleware.js';

router
    .route('/')
    .post(checkAuth, agregarPacintes)
    .get(checkAuth, obtenerPacientes);

router
    .route('/:id')
    .get(checkAuth, obtenerPaciente)
    .put(checkAuth, actualizarPaciente)
    .delete(checkAuth, eliminarPaciente);

export default router;