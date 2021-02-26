window.addEventListener('load', () => {
    const input = document.getElementById("category");
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            //console.log(input.value);
            sendRequest(input.value);
        }
    })
})

function sendRequest(input){
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                json.forEach(element => {
                    if (input === element.category)
                    console.log(element)    
                });
            })
}

window.addEventListener('load', () => {
    const but = document.getElementById("but1");
    but.addEventListener('click', () => {
        var categoryes = document.querySelectorAll(".radio input");
        categoryes.forEach(cat => {
            if (cat.checked === true)
            //console.log(cat.value);
            sendRequest(cat.value);
        })
    })
})
