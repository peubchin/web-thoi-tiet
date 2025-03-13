const { Router } = require('express');
const indexController = require('../controllers/indexController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const hasRole = require('../middleware/hasRole.js');

const managerRouter = Router();
managerRouter.use([authMiddleware, hasRole(['admin', 'staff'])]);
managerRouter.get('/getLocations', indexController.getLocations);

module.exports = managerRouter;
