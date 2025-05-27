//import the express
const express = require('express')
//import userController
const userController = require('./controllers/userController')
//import bookcontroller
const bookController = require('./controllers/bookController')
//import jwtMiddleware
const jwtMiddleware = require('./middleware/jwtMiddleware')
//import multerConfig
const multerConfig = require('./middleware/imgmulterMiddleware')
//import jobcontroller
const jobController = require('./controllers/jobcontroller')
//import app controller
const appController = require('./controllers/appController')
//import pdf multer
const pdfmulterConfig = require('./middleware/pdfmulterMiddleware')
//instance
const route = new express.Router()


//path for register
route.post('/register',userController.registerController)

//path for login
route.post('/login',userController.loginController)

//path for google login
route.post('/google-login',userController.googleLoginController)

//path to get all home book
route.get('/all-home-book',bookController.getHomeBookController)

//path to get all jobs
route.get('/all-jobs' , jobController.getAllJobsController)

//---------------------------------------------------------------------------------------------------
//------------------------------user-----------------------------------------------------------------

//path to add books
route.post('/add-book',jwtMiddleware, multerConfig.array('uploadedImages' , 3) , bookController.addBookController)

//path to get all books
route.get('/all-books' , jwtMiddleware , bookController.getAllBookController)

//path to view a book
route.get('/view-book/:id', bookController.getBookController)

//path to apply for a job
route.post('/apply-job' ,jwtMiddleware, pdfmulterConfig.single('resume'), appController.addApplicationController)

//path to update user profile
route.put('/user-profile-update' , jwtMiddleware ,multerConfig.single('profile') , userController.editUserProfileController)

//path to get all user added books
route.get('/user-books' , jwtMiddleware , bookController.getAllUserBookController)

//path to get all user brought books
route.get('/user-brought-books' , jwtMiddleware , bookController.getAllUserBroughtBookController)

//path to delete user books
route.delete('/delete-user-books/:id' , bookController.deleteAUserBookController)

//path to make payment
route.put('/make-payment', jwtMiddleware , bookController.makePaymentController)
//-------------------------------------------------------------------------------------------
//---------------------------------admin------------------------------------------------------


//path for all books admin books
route.get('/all-admin-books' , jwtMiddleware , bookController.getAllBookAdminController)

//path to approve book
route.put('/approve-book',jwtMiddleware , bookController.approveBookController)

//path to get all users
route.get('/all-users', jwtMiddleware , userController.getAllUsersController)

//path to add new job
route.post('/add-job' , jobController.addJobController)

//path to delete a job
route.delete('/delete-job/:id' , jobController.deleteAJobController)

//path to get all applications
route.get('/all-application' , appController.getAllApplicationController)

//path to update the admin profile
route.put('/admin-profile-update' , jwtMiddleware , multerConfig.single('profile'), userController.editAdminProfileController)


//routes export
module.exports = route

