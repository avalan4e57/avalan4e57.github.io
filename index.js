const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

let app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log('Express server is up on port ' + PORT)
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'am.igor.chernega@gmail.com',
    pass: 'sq73205081rt'
  }
})

app.post('/', function (req, res) {
  var mailOptions = {
    from: 'am.igor.chernega@gmail.com',
    to: 'am.igor.chernega@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Subjcet: ' + req.body.subject + '\n' + 'Message: ' + req.body.body
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

  res.send(req.body)
})
