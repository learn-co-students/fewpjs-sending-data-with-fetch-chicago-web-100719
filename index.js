// Add your code here
function submitData(name, email) {
    const body = document.querySelector('body')
    
    let formData = {
        name,
        email
    }
    
    let confObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch('http://localhost:3000/users', confObj)
     .then(resp => resp.json())
     .then(obj => document.body.innerHTML = obj['id'])
     .catch(error => document.body.innerHTML = error.message)
    
}