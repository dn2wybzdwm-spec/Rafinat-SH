<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<title>Rafinat Second Hand</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
body{font-family:Arial;margin:0;background:#fafafa;color:#333}

/* HEADER */
header{
  background:#7b2cbf;
  color:white;
  text-align:center;
  padding:40px 20px;
}

/* MENIU */
nav{
  background:#f1f1f1;
  padding:10px;
  text-align:center;
}
nav a{
  margin:0 15px;
  text-decoration:none;
  color:#7b2cbf;
  font-weight:bold;
}

/* CONȚINUT */
.container{
  max-width:1100px;
  margin:auto;
  padding:20px;
}

/* PRODUSE */
.grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(230px,1fr));
  gap:20px;
}
.card{
  background:white;
  border-radius:10px;
  padding:15px;
  box-shadow:0 2px 8px rgba(0,0,0,.1);
}
.card img{
  width:100%;
  border-radius:10px;
}
.btn{
  background:#e63946;
  color:white;
  border:none;
  padding:8px 12px;
  border-radius:6px;
  cursor:pointer;
  margin-top:10px;
}

/* FOOTER */
footer{
  text-align:center;
  padding:20px;
  margin-top:30px;
  background:#f1f1f1;
}
</style>
</head>

<body>

<header>
  <h1>Rafinat Second Hand</h1>
  <p>Haine frumoase la prețuri mici</p>
</header>

<nav>
  <a href="#produse">Produse</a>
  <a href="#despre">Despre noi</a>
  <a href="#contact">Contact</a>
</nav>

<div class="container">

  <h2 id="produse">Produse</h2>

  <div class="grid" id="lista-produse"></div>

  <h2 id="despre">Despre noi</h2>
  <p>
    La Rafinat Second Hand găsești haine atent selectate,
    în stare foarte bună, la prețuri accesibile.
  </p>

  <h2 id="contact">Contact</h2>
  <p>Ne poți scrie direct pe WhatsApp:</p>
  <a class="btn" href="https://wa.me/40700000000">Scrie-ne pe WhatsApp</a>

</div>

<footer>
  © 2026 — Rafinat Second Hand
</footer>

<script>
const produse = [
 {nume:"Geacă denim", pret:80, img:"https://via.placeholder.com/300"},
 {nume:"Rochie roșie", pret:95, img:"https://via.placeholder.com/300"},
 {nume:"Hanorac", pret:70, img:"https://via.placeholder.com/300"},
 {nume:"Pantaloni Zara", pret:65, img:"https://via.placeholder.com/300"}
];

const lista = document.getElementById("lista-produse");

produse.forEach(p=>{
  const c=document.createElement("div");
  c.className="card";
  c.innerHTML = `
    <img src="${p.img}">
    <h3>${p.nume}</h3>
    <p>${p.pret} RON</p>
    <button class="btn">Rezervă pe WhatsApp</button>
  `;
  c.querySelector("button").onclick = ()=>{
     window.location.href = "https://wa.me/40700000000?text=Bună! Vreau "+p.nume;
  };
  lista.appendChild(c);
});
</script>

</body>
</html>
