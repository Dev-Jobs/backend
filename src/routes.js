import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';
import InvitationController from './app/controllers/InvitationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Companies and users list
routes.get('/company', CompanyController.index);
routes.get('/users', UserController.index);

// Account creation
routes.post('/users', UserController.store);
routes.post('/company', CompanyController.store);

// Session creation
routes.post('/userSession', SessionController.userStore);
routes.post('/CompanySession', SessionController.companyStore);

// Authentication middleware
routes.use(authMiddleware);

// Invitations
routes.get('/invite', InvitationController.index);
routes.post('/invite', InvitationController.store);

// Updates for companies and users.
routes.put('/users', UserController.update);
routes.put('/company', CompanyController.update);

export default routes;
