const express = require('express')
const {getUser, Register, Login, Logout} = require('../controllers/userController')
const router = express.Router()
const verifyToken = require('../middleware/VerifyToken')
const refreshToken = require('../controllers/refreshToken')


router.get('/users',verifyToken,getUser)
router.post('/users',Register)
router.post('/login',Login)
router.get('/token',refreshToken)
router.delete('/logout', Logout)



module.exports = router;