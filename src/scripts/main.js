import apiObject from "./data"
import newCustomerObject from "./contactList"
import printToDOM from "./contact"



// apiObject.getCustomers().then(
//     (arrayOfCustomers) => {
//         let putHere = document.querySelector(".output")
//         console.log(arrayOfCustomers)
//         arrayOfCustomers.forEach(customer => {

//             let html = `<h1>${customer.name}</h1>
//             <h2>${customer.phoneNumber}`
//         putHere.innerHTML += html
//         });
//     }
// )
document.getElementById("createCustomerObject").addEventListener("click", newCustomerObject)

printToDOM()
