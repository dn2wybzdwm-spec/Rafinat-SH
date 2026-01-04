let lista = document.getElementById("lista");
let cat = document.getElementById("cat");
let max = document.getElementById("max");

let produse = [];

fetch("produse.json")
.then(r => r.json())
.then(data => {
    produse = data;
    afiseaza(produse);
});

function afiseaza(p){
  lista.innerHTML = "";
  p.forEach(item=>{
    lista.innerHTML += `
    <div class="card">
      <img src="${item.img}">
      <h3>${item.nume}</h3>
      <p class="price">${item.pret} RON</p>
      <a class="btn" href="https://wa.me/40?text=Salut! Vreau ${item.nume}">Rezervă pe WhatsApp</a>
    </div>`;
  });
}

cat.onchange = filtre;
max.oninput = filtre;

function filtre(){
  let f = produse.filter(p=>{
    return (cat.value=="toate" || p.categorie==cat.value)
    && (!max.value || p.pret<=max.value);
  });
  afiseaza(f);
}
