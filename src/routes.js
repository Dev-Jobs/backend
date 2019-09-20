import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ContactController from './app/controllers/ContactController';
import SessionController from './app/controllers/SessionController';
import InvitationController from './app/controllers/InvitationController';
import ApplicationController from './app/controllers/ApplicationController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Companies and users list
routes.get('/users', UserController.index);

// Account creation
routes.post('/users', UserController.store);

// Contact information
routes.post('/contact', ContactController.store);

// Session creation
routes.post('/session', SessionController.store);

// Authentication middleware
routes.use(authMiddleware);

// Invitations
routes.get('/invite', InvitationController.index);
routes.post('/invite', InvitationController.store);

// Applications
routes.get('/apply', ApplicationController.index);
routes.post('/apply', ApplicationController.store);

// Update Informations.
routes.put('/users', UserController.update);

// Upload User Avatar
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
