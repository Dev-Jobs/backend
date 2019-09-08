import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CompanyController from './app/controllers/CompanyController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Account creation
routes.post('/users', UserController.store);
routes.post('/company', CompanyController.store);

// Session creation
routes.post('/userSession', SessionController.userStore);
routes.post('/CompanySession', SessionController.companyStore);

// Authentication middleware
routes.use(authMiddleware);

// Updates for companies and users.
routes.put('/users', UserController.update);
routes.put('/company', CompanyController.update);

export default routes;
