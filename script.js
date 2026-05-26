async function getch(url) {
    const response = await fetch(url);
    const adat = await response.json();
    return adat;
}
//---------------------------------------------------------------------------------------------------------------//
const gomb = document.getElementById("gomb");
const zaszlo = document.getElementById("zaszlo");
const nev = document.getElementById("nev");
const fovaros = document.getElementById("fovaros");
const lakossag = document.getElementById("lakossag");
const kontinens = document.getElementById("kontinens");
//---------------------------------------------------------------------------------------------------------------//
async function uj_orszag() {
    const osszes = await getch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,continents");

    const i = Math.floor(Math.random() * osszes.length);
    const orszag = osszes[i];

    zaszlo.src = orszag.flags.svg;
    nev.innerHTML = orszag.name.common;
    fovaros.innerHTML = orszag.capital?.[0] ?? "–";

    lakossag.innerHTML = orszag.population.toLocaleString("hu-HU") + " fő";
    kontinens.innerHTML = orszag.continents[0];
}
//---------------------------------------------------------------------------------------------------------------//
gomb.addEventListener("click", uj_orszag);
//---------------------------------------------------------------------------------------------------------------//
uj_orszag();