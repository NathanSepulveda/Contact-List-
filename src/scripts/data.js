

const getCustomers = () => {
    return fetch("http://localhost:8088/contactCollection").then(response => response.json())
}

const postNewCustomer = (orderObject) => {
    console.log(orderObject)
    return fetch("http://localhost:8088/contactCollection", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObject)
    })
        .then(res => res.json())
}
let apiObject = {getCustomers, postNewCustomer}
export default apiObject