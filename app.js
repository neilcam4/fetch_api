console.log("hello from app.js")

document.getElementById("button1").addEventListener('click', getText)
function getText(){
    fetch('file.txt')
    .then(function(response){
    return response.text()
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function error(){
        console.log("oh no")
    })
}

document.getElementById("button2").addEventListener('click', getJson)
function getJson(){
fetch('input.json')
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    console.log(data.name)
})
}

