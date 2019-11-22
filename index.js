// Add your code here


function submitData(name, email) {
    return fetch('http://localhost:3000/users', configurationObject(name, email))
    .then(resp => resp.json())
    .then(object => {
        document.body.innerHTML = object["id"]
    })
    .catch(error => { 
        document.body.innerHTML = error.message
    })
}

function configurationObject(name, email)  {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        body: JSON.stringify({
            name,
            email
        })
    }
};