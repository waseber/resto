export async function getInventoryAPI(){
    fetch('http://localhost:5000/getInventory')
        .then(response => response.json())
        .then(data => (data))
}

export async function insertInventoryAPI(vals){
    console.log('hey', vals);
    fetch('http://localhost:5000/insertInventory',{
        headers:{
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(vals)
    })
    .then(response => response.json())
    .then(data => console.log(data))
}