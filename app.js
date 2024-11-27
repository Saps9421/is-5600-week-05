@@ -2,8 +2,6 @@ const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')


// Set the port
const port = process.env.PORT || 3000
// Boot the app
@@ -19,6 +17,9 @@ app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)
// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))

app.get('/orders', api.listOrders)
app.get('/orders/', api.createOrder)

// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
