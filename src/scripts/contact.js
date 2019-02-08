//create HTML Reps of Customer and print to DOM
import apiObject from "./data"
import newCustomerObject from "./contactList"


let printToDOM = () => {

    // document.querySelector(".output").innerHTML = ""
    apiObject.getCustomers().then(
        (arrayOfCustomers) => {
            let putHere = document.querySelector(".output")
            console.log(arrayOfCustomers)
            arrayOfCustomers.forEach(customer => {

                let html = `<h1>${customer.name}</h1>
            <h2>${customer.phoneNumber}`
                putHere.innerHTML += html
            });
        }
    )
}

export default printToDOM