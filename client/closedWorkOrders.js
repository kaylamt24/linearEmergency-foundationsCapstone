const baseURL = "http://localhost:5000"

// Select the element
// Write the function
// Add event listener

const addWork = document.querySelector('#addWorkOrder')
const displayExistingReq = document.querySelector('#workOrderDisplay')



const createWorkOrders = (workOrder) => {
    const createNewWorkOrder = document.createElement('section')
    createNewWorkOrder.classList.add('new-workorder')

    createNewWorkOrder.innerHTML = ` 
    <p>${workOrder.firstName}</p>
    <p>${workOrder.lastName}</p>
    <p>${workOrder.streetAddress}</p>
    <p>${workOrder.city}</p>
    <p>${workOrder.state}</p>
    <p>${workOrder.zipcode}</p>
    <p>${workOrder.phoneNumber}</p>
    <p>${workOrder.issue}</p>

    <section>
    <select name ="options" id="status">
    <option value ="change">Update Status</option>
    <option value ="closed">Completed Work Order</option>
    <option value ="delete">Delete Work Order</option>
    </select>
    </section>
    <button onclick="deleteWorkOrder(${workOrder.id})">Submit</button>
  `

    displayExistingReq.appendChild(createNewWorkOrder)
}

const displayAllClosedWorkOrders = (arr) => {
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        console.log(arr[i])
        if (arr[i].open == false){
            console.log('found false')
            createWorkOrders(arr[i])
        }
        // createWorkOrders(arr[i])
    }
}

const getAllClosedlWorkOrders = () => {
    axios.get(`${baseURL}/workOrders`)
    .then((res) => {
        // console.log(res.data)
        displayAllClosedWorkOrders(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

}





//addWork.addEventListener('click', addNewWorkOrder)


getAllClosedlWorkOrders()
