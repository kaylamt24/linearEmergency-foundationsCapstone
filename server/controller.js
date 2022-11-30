const workOrders = require('./db.json')
// const getHomePage = require('./homepage.html')

let globalId = 7;

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
        issue: issue
    
    }
    workOrders.push(newWorkOrder)

    globalId++

    res.status(200).send(workOrders)
    }, 

    deleteWorkOrder: (req, res) => {
        const index = workOrders.findIndex((el) => el.id === +req.params.id)

        workOrders.splice(index, 1)

        res.status(200).send(workOrders)
    }
    // getHomePage: (req, res) => {
    //     res.status(200).send(workOrders)
    // },
}



