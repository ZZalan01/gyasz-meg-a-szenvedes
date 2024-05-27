fetch("https://pizza.kando-dev.eu/Pizza").then(function(adatok){
        return adatok.json();
    }).then(function (adatok){
        console.log(adatok)
        let contentHTML = document.getElementById("content")
        contentHTML.innerHTML = "";
        
                for (let i = 0; i < adatok.length; i++) {
                    contentHTML.innerHTML += `<div class="card col-sm-3" style="width:18rem;">
                    <img src="${adatok[i].kepURL}" class="card-img-top" alt="${adatok[i].name}">
                    <div class="card-body">
                    <h5 class="card-title">${adatok[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Gluténmentes: ${adatok[i].isGlutenFree ? "Igen" : "Nem"}</h6>
                    <h5 class="card-title">Ár: ${adatok[i].id * "18"}  </h5>
                    <button>Kosárba</button>
                    <button id="reszlet">Részletek</button>
                </div>
                </div>
                </div>`
                }
    })

function SingleData(id){
    fetch("https://pizza.kando-dev.eu/Pizza/"+id).then(function(adatok){
        return adatok.json();
    }).then(function(adatok){
        let contentHTML = document.getElementById("content")
        contentHTML.innerHTML += `<div class="card col-sm-3" style="width:18rem;">
                    <img src="${adatok[i].kepURL}" class="card-img-top" alt="${adatok[i].name}">
                    <div class="card-body">
                    <h5 class="card-title">${adatok[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Gluténmentes: ${adatok[i].isGlutenFree ? "Igen" : "Nem"}</h6>
                    <h5 class="card-title">Ár: ${adatok[i].id * "18"}  </h5>
                    <button>Kosárba</button>
                    <button id="reszlet">Részletek</button>
                </div>
                </div>
                </div>`
}

    )}

function Delete(id){
    fetch("https://pizza.kando-dev.eu/Pizza/"+id, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"
    }   
    })
    .then(function(){
        location.reload();
    })
}
