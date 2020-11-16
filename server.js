const express = require('express')
const cors = require('cors')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let products = [
      {
        id: 1,
        name: 'Automobile',
        text:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi cumque, et facilis cum molestiae sit quas accusantium eum nisi voluptatibus corporis dolores accusamus sint deserunt iste laudantium. Pariatur, quasi.'
      },
      {
        id: 2,
        name: 'Banani',
        text:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi cumque, et facilis cum molestiae sit quas accusantium eum nisi voluptatibus corporis dolores accusamus sint deserunt iste laudantium. Pariatur, quasi.'
      },
      {
        id: 3,
        name: 'Lyudi',
        text:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi cumque, et facilis cum molestiae sit quas accusantium eum nisi voluptatibus corporis dolores accusamus sint deserunt iste laudantium. Pariatur, quasi.'
      },
      {
        id: 4,
        name: 'Baraban',
        text:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi cumque, et facilis cum molestiae sit quas accusantium eum nisi voluptatibus corporis dolores accusamus sint deserunt iste laudantium. Pariatur, quasi.'
      },
      {
        id: 5,
        name: 'Papaha',
        text:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eligendi cumque, et facilis cum molestiae sit quas accusantium eum nisi voluptatibus corporis dolores accusamus sint deserunt iste laudantium. Pariatur, quasi.'
      },
]

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/api/products', (req, res) => {
    res.status(200).json(products)
})

app.put('/api/products/:id', (req, res) => {
  const idx = products.findIndex(p => p.id == req.params.id) 
  let product = {
    id: null,
    name: '',
    text: ''
  }
  product.name = req.body.name
  product.text = req.body.text
  product.id = Number(req.params.id)
  products[idx] = product
  res.status(200).json(products)
})

app.delete('/api/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id)
  res.status(200).json(products)
})

app.listen(8081, () => {
    console.log('server start 8081')
})