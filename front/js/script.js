// Get the link information in JSON
fetch("http://localhost:3000/api/products")
    .then(resp => {if (resp.ok) {return resp.json()}})
    
    // Display the table information with a loop
    .then(products =>{
        for (i = 0; i < products.length; i++){
            // Select the element of the HTML file 
            const item = document.querySelector(".items")
            let line = `
            <a href="./product.html?id=${products[i]._id}">
                <article>
                    <img src="${products[i].imageUrl}" alt=${products[i].altTxt}>
                    <h3 class="productName">${products[i].name}</h3>
                    <p class="productDescription">${products[i].description}</p>
                </article>
            </a>
            `
            item.innerHTML += line
        }
    })
