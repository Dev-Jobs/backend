import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ContactController from './app/controllers/ContactController';
import SessionController from './app/controllers/SessionController';
import InvitationController from './app/controllers/InvitationController';
import ApplicationController from './app/controllers/ApplicationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

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

export default routes;
