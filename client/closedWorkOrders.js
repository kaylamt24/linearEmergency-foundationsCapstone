const baseURL = "http://localhost:5000"


const addWork = document.querySelector('#addWorkOrder')
const displayExistingReq = document.querySelector('#workOrderDisplay')


const createWorkOrders = (workOrder) => {
    const createNewWorkOrder = document.createElement('section')
    createNewWorkOrder.classList.add('new-workorder')

    createNewWorkOrder.innerHTML = ` 
    <p1>${workOrder.firstName} ${workOrder.lastName} </p1>
    <p>${workOrder.streetAddress} ${workOrder.city} ${workOrder.state}, ${workOrder.zipcode}</p>
    <p>${workOrder.phoneNumber}</p>
    <p2>Reason for call</p2>
    <p>${workOrder.issue}</p>

  `
    displayExistingReq.appendChild(createNewWorkOrder)
}


const displayAllClosedWorkOrders = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        console.log(arr[i])
        if (arr[i].open === false){
            console.log('found false')
            createWorkOrders(arr[i])
        }
    }
}

const getAllClosedlWorkOrders = () => {
    axios.get(`${baseURL}/workOrders`)
    .then((res) => {
        console.log(res.data)
        displayAllClosedWorkOrders(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

}


getAllClosedlWorkOrders()



