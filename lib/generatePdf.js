const fs = require('fs')
const pdf = require('html-pdf')

function generatePdf (srcPath, destPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(srcPath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      const options = { format: 'Letter' }

      pdf.create(data, options).toFile(destPath, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  })
}

module.exports = generatePdf
