const workOrders = require('./db.json')
// const closed = require('./closedWorkOrders.json')

// const getHomePage = require('./homepage.html')

let globalId = 8;

module.exports = {
    getWorkOrder: (req, res) => {
        res.status(200).send(workOrders)
    },

    addWorkOrder: (req, res) => {
    const {name, address, phoneNumber, issue} = req.body
        
    const newWorkOrder = {
        id: globalId,
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        issue: issue,
        open: true
    
    }
    workOrders.push(newWorkOrder)

    globalId++

    res.status(200).send(workOrders)
    }, 

    deleteWorkOrder: (req, res) => {
        const index = workOrders.findIndex((el) => el.id === +req.params.id)
        // you have index of thing you want to delete
        // instead of deleting, set property "open" to false

        workOrders[index]["open"] = false

        res.status(200).send(workOrders)
    },

    // closedWorkOrder: (req, res) => {
    //     // const index = deleteWorkOrder.findIndex((el) => el.id === +req.params.id)
    //     // console.log(closedWorkOrders)
    //     closed.push(deleteWorkOrder)
    //     console.log(closed)

    //     res.status(200).send(deleteWorkOrder)

    // }

  
}











