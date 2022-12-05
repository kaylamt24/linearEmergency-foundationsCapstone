const workOrders = require('./db.json')
const { query } = require('./index')


let globalId = 13;


module.exports = {
    getWorkOrder: async (req, res) => {
        const queryString = "SELECT * FROM db"
        const results = await query(queryString)
        const workOrdersRawData = results.rows
        const changeName = (workOrdersRawData) => {
          const newArray =   workOrdersRawData.map((workOrder) => {
                return {
                    id: workOrder.id,
                    firstName: workOrder.firstname, 
                    lastName: workOrder.lastname,
                    streetAddress: workOrder.streetaddress,
                    city: workOrder.city,
                    state: workOrder.state,
                    zipcode: workOrder.zipcode,
                    phoneNumber: workOrder.phonenumber,
                    issue: workOrder.issue,
                    open: workOrder.open
                }
            })
            return newArray
        }
        const workOrders = changeName(workOrdersRawData)
        res.status(200).send(workOrders)
    },

    addWorkOrder: async (req, res) => {
    const {firstName, lastName, streetAddress, city, state, zipcode, phoneNumber, issue} = req.body
        
    const newWorkOrder = {
        id: globalId,
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        issue: issue,
        open: true
    }
    console.log(newWorkOrder)
    // workOrders.push(newWorkOrder)
    const queryString = `INSERT INTO db (id, firstname, lastname, streetaddress, city, state, zipcode, phonenumber, issue, open)
    VALUES ('${newWorkOrder.id}', '${newWorkOrder.firstName}', '${newWorkOrder.lastName}', '${newWorkOrder.streetAddress}', '${newWorkOrder.city}', '${newWorkOrder.state}', '${newWorkOrder.zipcode}', '${newWorkOrder.phoneNumber}', '${newWorkOrder.issue}', '${newWorkOrder.open}')`

   
    console.log(queryString)

    const results = await query(queryString)
    // console.log(results)
    // console.log(queryString)

    globalId++

    res.status(200).send(workOrders)
    }, 

    deleteWorkOrder: async (req, res) => {
        const queryString2 = "SELECT * FROM db"
        const results2 = await query(queryString2)
        const workOrdersRawData = results2.rows
        const changeName = (workOrdersRawData) => {
          const newArray =   workOrdersRawData.map((workOrder) => {
                return {
                    id: workOrder.id,
                    firstName: workOrder.firstname, 
                    lastName: workOrder.lastname,
                    streetAddress: workOrder.streetaddress,
                    city: workOrder.city,
                    state: workOrder.state,
                    zipcode: workOrder.zipcode,
                    phoneNumber: workOrder.phonenumber,
                    issue: workOrder.issue,
                    open: workOrder.open
                }
            })
            return newArray
        }
        const workOrders = changeName(workOrdersRawData)
console.log(req.params.id)
console.log(workOrders)
        const index = workOrders.findIndex((el) => el.id == +req.params.id)
        
        // have index of thing you want to delete
        // instead of deleting, set property "open" to false
        console.log(index)
        workOrders[index]["open"] = false

        const queryString = `UPDATE db SET open=FALSE where id = '${req.params.id}'`
        console.log(queryString)

        const results = await query(queryString)
        console.log(results)

        res.status(200).send(workOrders)
    },


    // updateWorkOrder: (req, res) => {
    //     const index = workOrders.findIndex((el) => el.id === +req.params.id)

    //     workOrders[index]["open"] = true

    //     res.status(200).send(workOrders)
    //     // request will have info like work order id, and fields to change
    //     // get the work order to change
    //     // change it
    //     // then add it back to work orders
    
  
}











