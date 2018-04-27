const express = require('express')
const path = require('path')
const app = express()

const EmailService = require('./Services/EmailService')
const EmailController = require('./Controllers/EmailController')

// D'instancier notre service
const emailService = new EmailService()

// D'instancier notre classe de contrôler
const emailController = new EmailController(emailService)

// Définir les différents routes de mon application
app.get('/emails', emailController.showEmail.bind(emailController))
app.post('/emails/', emailController.insertEmail.bind(emailController))
app.put('/emails/:id', emailController.updateAction.bind(emailController))
app.delete('/emails/delete/:id', emailController.deleteAction.bind(emailController))

// Démarre le serveur
app.listen(3000, () => console.log('Example app listening on port 3000!'))