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
        console.log('workOrders', workOrders)
        res.status(200).send(workOrders)
    },

    addWorkOrder: async (req, res) => {
    const {firstname, lastname, streetaddress, city, state, zipcode, phonenumber, issue} = req.body
        
    const newWorkOrder = {
        id: globalId,
        firstname: firstname,
        lastname: lastname,
        streetaddress: streetaddress,
        city: city,
        state: state,
        zipcode: zipcode,
        phonenumber: phonenumber,
        issue: issue,
        open: true
    }

    // workOrders.push(newWorkOrder)
    const queryString = `INSERT INTO db (firstName, lastName, streetAddress, city, state, zipcode, phoneNumber, issue, open)
    VALUES (${newWorkOrder.firstname}, ${newWorkOrder.lastname}, ${newWorkOrder.streetaddress}, ${newWorkOrder.city}, ${newWorkOrder.state}, ${newWorkOrder.zipcode}, ${newWorkOrder.phonenumber}, ${newWorkOrder.issue}, ${newWorkOrder.open})`

   
    console.log(queryString)

    const results = await query(queryString)
    // console.log(results)
    // console.log(queryString)

    globalId++

    res.status(200).send(workOrders)
    }, 

    deleteWorkOrder: (req, res) => {
        const index = workOrders.findIndex((el) => el.id === +req.params.id)
        // have index of thing you want to delete
        // instead of deleting, set property "open" to false

        workOrders[index]["open"] = false

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











