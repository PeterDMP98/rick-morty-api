async function getProducts() {
    const data = await fetch("https://rickandmortyapi.com/api/character");

    const res =await data.json();

    for (const product of res) {
        console.log(res);
    }
    
}

getProducts()