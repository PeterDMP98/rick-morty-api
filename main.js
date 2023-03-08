async function getCharacters() {
    const data= await fetch("https://rickandmortyapi.com/api/character");
    const res = await data.json();
    
    console.log(res);
    
    // const statusObj ={
    //     Alive: "statusAlive",
    //     Unknown: "statusUnknown",
    //     Dead: "statusDead",
    // }

    const bodyHTML = document.querySelector("body")

    let html= "";

    for (const {episode, gender, image, location: {name: locationName}, name, origin: {name: originName}, species, status} of res.results){
        html +=
        `
        <div class="characters">

        <div class="character">

            <div class="character__head">
                <img src="${image}" alt="">
            </div>

            <div class="character__body">
                <h3>${name} - <span>${gender} - </span> </h3>

             <p>Episode number: ${episode.length}</p>
                <p>Location: ${locationName}</p>
                <p>origin planet: ${originName}</p>
                <p>Specie: ${species}</p>
                <p>Status: ${status} <span class="${status}"> </span></p>
        
            </div>   
         </div>
            
        </div>
        `
        console.log(typeof(status));
    }

    bodyHTML.innerHTML= html
}

getCharacters()