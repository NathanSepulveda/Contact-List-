import customerViewer from "./contactCollection"

let finishedForm = () => {
    document.querySelector("#addCustomer").addEventListener("click", event => {

        console.log(event)
        let customerName = document.getElementById("customerName").value
        console.log(customerName)
        let customerPhoneNumber = document.getElementById("customerPhoneNumber")
        // console.log(customerViewer.view())
        console.log(customerPhoneNumber)
        let customerAddress = document.getElementById("customerAddress").value
        console.log(customerAddress)
        let length = customerViewer.view().length
        console.log(length)
        let newId = length + 1
        customerViewer.add(newId, customerName, customerPhoneNumber, customerAddress)
    })
}
export default finishedForm