let out = document.getElementById("output");
window.addEventListener('load', () => {
    const input = document.getElementById("category");
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            //console.log(input.value);
            out.innerText = "";
            sendRequestCategory(input.value);
        }
    })
})

function sendRequestCategory(input){
    fetch('https://fakestoreapi.com/products/category/'+ input)
            .then(res => res.json())
            .then(json => {
                json.forEach(element => {
                    out.innerText += "Title: " + element.title + "\n";
                    out.innerText += "Category: " + element.category + "\n";
                    out.innerText += "Description: " + element.description + "\n";
                    out.innerText += "Price: " + element.price + "\n";
                    out.innerText += "\n\n\n";   
                });
            })
}

window.addEventListener('load', () => {
    const but = document.getElementById("but1");
    but.addEventListener('click', () => {
        var categoryes = document.querySelectorAll(".radio input");
        categoryes.forEach(cat => {
            if (cat.checked === true) {
                out.innerText = "";
                choicePrice(cat.value);
            }
            //console.log(cat.value);
        })
    })
})

function choicePrice(inputPrice){
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                json.forEach(element => {
                    let low = 0;
                    if(inputPrice == 25){
                        low = 0;
                    }
                    if(inputPrice == 50){
                        low = 25;
                    }
                    if(inputPrice == 100){
                        low = 50;
                    }
                    if(inputPrice == 500){
                        low = 100;
                    }
                    if(inputPrice == 1000){
                        low = 500;
                    }
                    if (inputPrice >= element.price && element.price >= low){
                    console.log(element)
                    out.innerText += "Title: " + element.title + "\n";
                    out.innerText += "Category: " + element.category + "\n";
                    out.innerText += "Description: " + element.description + "\n";
                    out.innerText += "Price: " + element.price + "\n";
                    out.innerText += "\n\n\n";
                }
                });
            })
}

//fetch('https://fakestoreapi.com/products/1')
//           .then(res=>res.json())
//           .then(json=>console.log(json))