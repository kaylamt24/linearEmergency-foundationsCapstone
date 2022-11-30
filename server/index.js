// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

//Endpoint - destructure the get work orders
const {getWorkOrder, addWorkOrder, deleteWorkOrder} = require('./controller')

// const{getHomePage} = require('./homepage.html')

//Actual enpoint that goes with the destructure

app.get('/workOrders', getWorkOrder)
app.post('/addWorkOrder', addWorkOrder)
app.delete('/deleteWorkOrder/:id', deleteWorkOrder)
// app.put('/updateWorkOrder', updateWorkOrder)
// app.get('/homepage', getHomePage)

app.listen(5000, () => console.log(`docked and loaded on 5000`))




