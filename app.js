

document.getElementById('button1').addEventListener('click',getScript )

function getScript(){
    fetch('file.txt')
    .then(function(response){
        console.log(response)
    })
    .catch(function error(){
        console.log("oh no")
    })
}