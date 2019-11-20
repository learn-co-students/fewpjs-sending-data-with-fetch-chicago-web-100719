// Add your code here


function submitData(name, email) {
    const body = document.querySelector('body')
    let formData = {
        name,
        email
    }
    let postObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    return fetch('http://localhost:3000/users', postObj)
        .then(resp => resp.json())
        .then(user => document.body.innerHTML = user['id'])
        .catch(error => document.body.innerHTML = error.message)
}
