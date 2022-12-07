
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

const app = express()


app.use(express.json())
app.use(cors())


const {getWorkOrder, addWorkOrder, deleteWorkOrder} = require('./controller')



app.get('/workOrders', getWorkOrder)
app.post('/addWorkOrder', addWorkOrder)
app.delete('/deleteWorkOrder/:id', deleteWorkOrder)


app.listen(5000, () => console.log(`Linear Emergency running on 5000`))
