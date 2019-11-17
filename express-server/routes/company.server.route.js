// ./express-server/routes/todo.server.route.js
import express from 'express';

//import controller file
import * as companyController from '../controllers/company.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/company')
     .get(companyController.getCompanies)
     .post(companyController.addCompany)
     .put(companyController.updateCompany);

router.route('/company/:id')
      .get(companyController.getCompany)
      .delete(companyController.deleteCompany);


export default router;
