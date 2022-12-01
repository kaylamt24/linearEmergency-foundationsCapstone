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
    <p>${workOrder.name}</p>
    <p>${workOrder.address}</p>
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

const displayAllWorkOrders = (arr) => {
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        if (arr[i].open){
            createWorkOrders(arr[i])
        }
        // createWorkOrders(arr[i])
    }
}

const getAllWorkOrders = () => {
    axios.get(`${baseURL}/workOrders`)
    .then((res) => {
        // console.log(res.data)
        displayAllWorkOrders(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

}


const addNewWorkOrder = () => {

    displayExistingReq.innerHTML = ''

    const name = document.querySelector('#nameInput')
    const address = document.querySelector('#addressInput')
    const phoneNumber = document.querySelector('#phoneInput')
    const issue = document.querySelector('#freeform')

    let bodyObj = {
        name: name.value,
        address: address.value,
        phoneNumber: phoneNumber.value,
        issue: issue.value,
        open: true
    }

    console.log(bodyObj)

    axios.post(`${baseURL}/addWorkOrder`, bodyObj)

    .then((res) => {
        
    name.value = ''
    address.value = ''
    phoneNumber.value = ''
    issue.value = ''
    

        displayAllWorkOrders(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
const deleteWorkOrder = (id) => {


    axios.delete(`${baseURL}/deleteWorkOrder/${id}`)

    .then((res) => {

    displayExistingReq.innerHTML = ''

        displayAllWorkOrders(res.data)



    })

    // const completedWorkOrder = () => {

    //     // const name = document.querySelector('#nameInput')
    //     // const address = document.querySelector('#addressInput')
    //     // const phoneNumber = document.querySelector('#phoneInput')
    //     // const issue = document.querySelector('#freeform')
    
    //     // let bodyObj = {
    //     //     name: name.value,
    //     //     address: address.value,
    //     //     phoneNumber: phoneNumber.value,
    //     //     issue: issue.value
    //     // }

    //     axios.post(`${baseURL}/closedWorkOrders/${id}`, bodyObj)
    //     .then((res) => {
    //         deleteWorkOrder.push(completedWorkOrder)
    //     })
    // }

}

// const getHomePage = () => {
//     axios.get(`${baseURL}/getHomePage`)
//     .then((res) => {
//         // console.log(res.data)
//         displayAllWorkOrders(res.data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// }



addWork.addEventListener('click', addNewWorkOrder)


getAllWorkOrders()
// completedWorkOrder()
// getAllWorkOrders.push(deleteWorkOrder)


//Get the information
//add new information
//delete the new information

//Everything is working on one single screen. At this point, I need to do a few different things. 

// 1.) I would like for the new request to be in the New work order screen and then move to the open work orders screen

// 2.) When a work order is deleted, it goes into the deleted work orders screen.

