const router = require('express').Router();
const { createRepo,findStarredRepo,searchByUsername,findRepo, unstarRepo, finding } = require('../controller/controller');
const { findUser } = require('../controller/userController');
console.log(findUser);

router.post('/createRepo',createRepo);
router.post('/',findRepo);
router.get('/',findStarredRepo);
router.get('/searchby/:username',searchByUsername);
router.delete('/',unstarRepo);
router.get('/search',finding);
router.post('/login-fb',findUser);


module.exports = router;