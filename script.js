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
                    <h6 class="card-subtitle mb-2 text-muted">Gluténmentes: ${adatok[i].isGlutenFree}</h6>
                    <h5 class="card-title">Ár: ${adatok[i].id + "0"}  </h5>
                    <button>Kosárba</button>
                </div>
                </div>
                </div>`
                }
    })