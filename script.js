let body = document.body
let aktuellerNutzer = JSON.parse(localStorage.getItem("aktuellerNutzer"));
let gespeicherteFarben = localStorage.getItem(`aktuelleFarbe_${aktuellerNutzer.benutzername}`)
body.style.backgroundColor = gespeicherteFarben;
let ausgewählteSeite = document.getElementById("ausgewählteSeite")

/*
window.addEventListener("resize", function (){

    console.log(window.screen.width);
})
    */
/*
let MarginLeft;
let Width_ausgewälte_Seite;
let Textabstand;

window.addEventListener("resize", () => {
    const W440 = window.matchMedia("(max-width: 440px)");
    const W650 = window.matchMedia("(max-width: 650px)");
    const W780 = window.matchMedia("(max-width: 780px)");
    const W830 = window.matchMedia("(max-width: 830px)");

    
    console.log("Fenstergröße geändert:", window.innerWidth, "x", window.innerHeight);
    if (W440.matches){
        MarginLeft = -60 + "px";
        Width_ausgewälte_Seite = 100 + "px"
        Textabstand = 10 + "px";

    }
    else if(W650.matches) {
        MarginLeft = -70 + "px";
        Width_ausgewälte_Seite = 400 + "px"; // davor 120
        Textabstand = 25 + "px";

    }
    else if(W780.matches) {
        MarginLeft = -90 + "px";
        Width_ausgewälte_Seite = 140 + "px";
        Textabstand = 35 + "px";

    }
    else if(W830.matches) {
        MarginLeft = -80 + "px";
        Width_ausgewälte_Seite = 140 + "px";
        Textabstand = 35 + "px";

    }  else {
        // Fallback für größere Fensterbreiten
        MarginLeft = "-100px";
        Width_ausgewälte_Seite = "160px";
        Textabstand = "40px";
    }
    localStorage.removeItem("script_window_margin");
    localStorage.removeItem("script_window_width");
    localStorage.removeItem("script_window_Textabstand");
    localStorage.setItem('script_window_margin', MarginLeft);
    localStorage.setItem('script_window_width', Width_ausgewälte_Seite);
    localStorage.setItem('script_window_Textabstand', Textabstand);

    console.log(MarginLeft);
    console.log(Width_ausgewälte_Seite);


  });   
  
*/


function chagangerectStundenplan(){
    ausgewählteSeite.style.marginLeft = -90 + "px";
    ausgewählteSeite.style.width = 160 + "px";
    ausgewählteSeite.style.transition = 0.5 + "s";
    setTimeout(() => {
        window.location.href = "../Stundenplan/Stundenplan.html";
    }, 390)

}

function chagangerectHausaufgaben(){
    ausgewählteSeite.style.marginLeft = 74 + "px";
    ausgewählteSeite.style.width = 180 + "px";
    ausgewählteSeite.style.transition = 0.5 + "s";
    setTimeout(() => {
        window.location.href = "../Hausaufgaben/Hausaufgaben.html";
    }, 400)
}

function chagangerectProfil(){
    ausgewählteSeite.style.marginLeft = 201 + "px";
    ausgewählteSeite.style.width = 90 + "px";
    ausgewählteSeite.style.transition = 0.5 + "s";
    setTimeout(() => {
        window.location.href = "..//Profil/Profil.html";
    }, 410)

}