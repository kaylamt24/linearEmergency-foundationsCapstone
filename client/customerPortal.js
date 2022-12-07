const baseURL = "http://localhost:5000"


const addWork = document.querySelector('#addWorkOrder')
const displayExistingReq = document.querySelector('#workOrderDisplay')


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
        //change to lowercase
        firstName.value = ''
        lastName.value = ''
        streetAddress.value = ''
        city.value = ''
        state.value = ''
        zipcode.value = ''
        phoneNumber.value = ''
        issue.value = ''

    })
    .catch((err) => {
        console.log(err)
    })
}

addWork.addEventListener('click', addNewWorkOrder)


let button = document.getElementById("addWorkOrder")


button.addEventListener('click', function(){
    if (button.click = true){
       window.location.href="./customerPortalExit.html"
    } else {
        console.log('redirect error')
    } 
})



