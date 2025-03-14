const { Router } = require('express');
const indexController = require('../controllers/indexController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const hasRole = require('../middleware/hasRole.js');
const newsController = require('../controllers/newsController.js');

const managerRouter = Router();
managerRouter.use([authMiddleware, hasRole(['admin', 'staff'])]);
managerRouter.get('/getLocations', indexController.getLocations);
managerRouter.get('/create-news', newsController.createNews);

module.exports = managerRouter;
