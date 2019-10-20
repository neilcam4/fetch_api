

document.getElementById('button1').addEventListener('click',getText )

function getText(){
    fetch('file.txt')
    .then(function(response){
       response.text()
       console.log(response.text())
    })
    .then(function(data){
        console.log(data)
    })
    .catch(function error(){
        console.log("oh no")
    })
}