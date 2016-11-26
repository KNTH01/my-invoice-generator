const express = require('express')
const router = express.Router()
const generatePdf = require('../lib/generatePdf')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/generateInvoice', (req, res) => {
  let { name, description, quantity, price } = req.body

  const invoicesTpl = 'invoicesTpl'
  const generatedPdf = 'generatedPdf'

  generatePdf(`./${invoicesTpl}/invoice.html`, `./${generatedPdf}/test.pdf`)
    .then(data => {
      console.log(data)
      res.redirect('/')
    })
    .catch(err => {
      console.error(err)
      res.redirect('/')
    })
})

module.exports = router
