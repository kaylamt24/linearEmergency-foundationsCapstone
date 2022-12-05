// Require packages
const express = require('express')
const cors = require('cors')
const {Client} = require('pg')
const client = new Client({
    user: 'kaylamt24',
    host: 'db.bit.io',
    database: 'kaylamt24/LE_Foundations_Capstone',
    password: 'v2_3wSuC_DjRTmaWRJrVUKdsCpSharTu',
    ssl: true,
    port: 5432
})

client.connect()

module.exports = {
    query: (psql) => {
        return client.query(psql)
    }
}


// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

//Endpoint - destructure the get work orders
const {getWorkOrder, addWorkOrder, deleteWorkOrder} = require('./controller')


//Actual enpoint that goes with the destructure

app.get('/workOrders', getWorkOrder)
app.post('/addWorkOrder', addWorkOrder)
app.delete('/deleteWorkOrder/:id', deleteWorkOrder)
// app.put('/updateWorkOrder/:id', updateWorkOrder)


app.listen(5000, () => console.log(`Linear Emergency running on 5000`))




