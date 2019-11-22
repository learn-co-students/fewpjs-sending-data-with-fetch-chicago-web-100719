// Add your code here

function submitData(userName, userEmail){

    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };

    return fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(user => document.body.innerHTML = user.id)
        .catch(error => document.body.innerHTML = error.message)

}




















// configurationObject = {
//     method: "POST"
//     headers: {
//         "Content-Type" : "application/json",
//         "Accept" : "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     }) 
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(resp => resp.json())
//     .then(dog => console.log(dog));