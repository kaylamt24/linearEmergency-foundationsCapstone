const baseURL = "http://localhost:5000"


const addWork = document.querySelector('#addWorkOrder')
const displayExistingReq = document.querySelector('#workOrderDisplay')



const createWorkOrders = (workOrder) => {
    const createNewWorkOrder = document.createElement('section')
    createNewWorkOrder.classList.add('new-workorder')

    createNewWorkOrder.innerHTML = ` 
    <p1>${workOrder.firstName} ${workOrder.lastName}</p1> 
    <p>${workOrder.streetAddress} ${workOrder.city} ${workOrder.state}, ${workOrder.zipcode}</p>
    <p>#${workOrder.phoneNumber}</p>
    <p2>Reason for call</p2>
    <p>${workOrder.issue}</p>

    <section>
    <select name ="options" id="status">
    <option value ="change">Open Work Order</option>
    <option value ="closed">Work Order Completed</option>
    
    </select>
    <button onclick="deleteWorkOrder(${workOrder.id})">Submit</button>
    </section>
  `

    displayExistingReq.appendChild(createNewWorkOrder)
}

const displayAllWorkOrders = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if (arr[i].open){
            createWorkOrders(arr[i])
        }
    
    }
}

const getAllWorkOrders = () => {
    axios.get(`${baseURL}/workOrders`)
    .then((res) => {
        console.log(res.data)
        displayAllWorkOrders(res.data)
    })
    .catch((err) => {
        console.log(err)
    })

}


const addNewWorkOrder = () => {

    displayExistingReq.innerHTML = ''

    const firstName = document.querySelector('#firstNameInput')
    const lastName = document.querySelector('#lastNameInput')
    const streetAddress = document.querySelector('#streetAddressInput')
    const city = document.querySelector('#cityInput')
    const state = document.querySelector('#stateInput')
    const zipcode = document.querySelector('#zipcodeInput')
    const phoneNumber = document.querySelector('#phoneInput')
    const issue = document.querySelector('#freeform')

    const phone = phoneNumber.value;
    phoneNumber.value = phone.replace(/[^\d]/g, '');
    if (phone.length > 3 && phone.length <= 6) {
        phoneNumber.value = phone.slice(0, 3) + "-" + phone.slice(3);
    }
    else if (phone.length > 6) {
        phoneNumber.value = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6);
    }

    let bodyObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        streetAddress: streetAddress.value,
        city: city.value,
        state: state.value,
        zipcode: zipcode.value,
        phoneNumber: phoneNumber.value,
        issue: issue.value,
        open: true
    }

    console.log(bodyObj)

    axios.post(`${baseURL}/addWorkOrder`, bodyObj)
    

    .then((res) => {
        
        firstName.value = ''
        lastName.value = ''
        streetAddress.value = ''
        city.value = ''
        state.value = ''
        zipcode.value = ''
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


}

addWork.addEventListener('click', addNewWorkOrder)


getAllWorkOrders()




