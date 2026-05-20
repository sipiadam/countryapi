// ugyanúgy mint az órán: fetch + json visszaadás
async function getch(url) {
    const response = await fetch(url);
    const adat = await response.json();
    return adat;
}
//---------------------------------------------------------------------------------------------------------------//
// az összes elemet lekérem az oldalról
const gomb = document.getElementById("gomb");
// megkeresi a HTML-ben azt az elemet aminek id="gomb"
// ezután a JS-ben a gomb változón keresztül tudjuk elérni
const zaszlo = document.getElementById("zaszlo");
const nev = document.getElementById("nev");
const fovaros = document.getElementById("fovaros");
const lakossag = document.getElementById("lakossag");
const kontinens = document.getElementById("kontinens");
//---------------------------------------------------------------------------------------------------------------//
// ezt hívjuk meg amikor rányomnak a gombra
async function uj_orszag() {
    const osszes = await getch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,continents");
    // osszes egy TÖMB, benne ~250 ország adata
    // pl. osszes[0] = Afganisztán, osszes[1] = Albánia, stb.

    // véletlenszerű ország kiválasztása
    const i = Math.floor(Math.random() * osszes.length);
    const orszag = osszes[i];

    // adatok kiírása az oldalra
    zaszlo.src = orszag.flags.svg;  // a zászló képének linkje
    nev.innerHTML = orszag.name.common; // az ország neve
    fovaros.innerHTML = orszag.capital?.[0] ?? "–";
     // a ?. azt jelenti: "ha van capital, akkor add az első elemét"
    // a ?? azt jelenti: "ha nincs (null/undefined), írj –-t helyette"
    // azért kell mert néhány országnak nincs fővárosa az API-ban

    lakossag.innerHTML = orszag.population.toLocaleString("hu-HU") + " fő";
    kontinens.innerHTML = orszag.continents[0];
}
//---------------------------------------------------------------------------------------------------------------//
gomb.addEventListener("click", uj_orszag);
// amikor rákattintanak a gombra, meghívja az uj_orszag függvényt
//---------------------------------------------------------------------------------------------------------------//
// oldal betöltésekor rögtön tölt egyet
uj_orszag();