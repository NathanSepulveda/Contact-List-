//create object of new customer

import apiObject from "./data"
import printToDOM from "./contact"


let newCustomerObject = () => {
    
    let customerView = document.querySelector(".output")
    let newCustomer = {}
    let name = document.querySelector("#customerName").value
    let phoneNumber = document.querySelector("#customerPhoneNumber").value
    let address = document.querySelector("#customerAddress").value
    newCustomer.name = name
    newCustomer.phoneNumber = phoneNumber
    newCustomer.address = address
    // console.log(newCustomer)
    apiObject.postNewCustomer(newCustomer)
    customerView.innerHTML = ""
    // printToDOM()

}



export default newCustomerObject