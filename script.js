// Dette er en ________ dag som alle de ________
// gjestene har gledet seg til, for i dag skal de gjøre stas på den ________ Marita.
// Mange har gitt Marita ________ gaver, og disse ________ gavene er Marita veldig glad for.
// Hun vil gjerne takke alle ________ gjester for at hun fikk så mye ________.

const tekst = document.getElementById('tekst');
let ord1 = "________";
let ord2 = "________";
let ord3 = "________";
let ord4 = "________";
let ord5 = "________";
let ord6 = "________";
let ord7 = "________";

function ordEn(valg) {
    ord1 = valg.innerHTML;
    historie();
} 

function ordTo(valg) {
    ord2 = valg.innerHTML;
    historie();
}

function ordTre(valg) {
    ord3 = valg.innerHTML;
    historie();
}

function ordFire(valg) {
    ord4 = valg.innerHTML;
    historie();
}

function ordFem(valg) {
    ord5 = valg.innerHTML;
    historie();
}

function ordSeks(valg) {
    ord6 = valg.innerHTML;
    historie();
}

function ordSyv(valg) {
    ord7 = valg.innerHTML;
    historie();
}

function historie() {
    tekst.innerHTML = `
    Dette er en ${ord1} dag som alle de ${ord2}
    gjestene har gledet seg til, <br>for i dag skal de gjøre stas på den ${ord3} Marita. <br>
    Mange har gitt Marita ${ord4} gaver, og disse ${ord5} gavene er Marita veldig glad for.
    <br>Hun vil gjerne takke alle ${ord6} gjester for at hun fikk så mye ${ord7}.
    `
}

historie();