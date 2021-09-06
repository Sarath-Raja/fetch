fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Sarath Raja"
    })
})
    .then(res => {
        // Fetch doesn't fail and go to error block until an network error happens
        // So we use res.ok to deterimine if the call is success/failure
        // Status codes 200-299 are considered as success
        if(res.ok)
            console.log('Success', res.status)
        else
            console.log('Failure', res.status)
        res.json()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })
