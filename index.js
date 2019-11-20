

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(returndata => {
        document.body.innerHTML = returndata.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}

