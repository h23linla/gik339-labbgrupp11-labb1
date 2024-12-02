const theCheckbox = document.getElementsByClassName("sub-section_three"); /*HTMLcollection*/
console.log(theCheckbox);

const allTextFields = document.querySelectorAll(".textfield");
console.log(allTextFields); /*NodeList*/

const theBigButt = document.getElementById("changeSize");
console.log(theBigButt);

const theEmptyDiv = document.querySelector("#empty-div");
console.log(theEmptyDiv);

/* ---------------------------------------------- */

/*for(let i = 0; i <allTextFields.length; i++) {
    allTextFields[i].addEventListener("click", handleClick);
} /*om vi byter click+handleClick till blur skrivs det ut under ist.*/

for(let i = 0; i <allTextFields.length; i++) {
    allTextFields[i].addEventListener("blur", handleBlur);
    allTextFields[i].addEventListener("click", handleClick);
};

theCheckbox.forEach((field) => {
    field.addEventListener("change", handleColor);
}); /*vad är field?*/

/*allTextFields.forEach((field) => {
    field.addEventListener("blur", handleBlur);
});*/

function handleColor(e) {
    const value = e.target.value; /*value används aldrig här*/
}

function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    const html = `<p>Fältet ${name} har värdet ${value}</p>`;
    theEmptyDiv.insertAdjacentHTML("beforeend", html);
}

function handleClick(e) {
    e.preventDefault();
    const targetName = e.target.id; /*vilket ID hade det vi tryckte på?*/

    const colorField = settings.color; /*settings=formulärets namn*/
    const contentField = settings.content;

    theEmptyDiv.style.backgroundColor = colorField.value;
    theEmptyDiv.innerHTML = contentField.value;

    theEmptyDiv.insertAdjacentElement("afterend", theBigButt); /*i.A.E vill ha något man skapat med .createElement eller hämtat med getelementbyid = HTMLElement-objekt. det är därför vi inte kunde lägga till andra grejer än theBigButt där*/
    console.log(targetName); /*vi skriver ut ID:et på det vi tryckte på*/
    console.log("handleClick, eventobjekt: ", e);
}

/*I del 1 skickar hon en funktion till en annan, typ waitingForClick(handleClick) ca 19:00 i videon. när någon klickat i function handleClick skickas den till function waitingForClick*/

/*hon skriver section(en tagg i html).addEventListener("click", handleClick);, detta utanför och under hennes definierade funktioner. hon tycker detta är bättre än att lägga till i html*/

/* knappen:
–vi behöver inte loopa eftersom det endast är en knapp
–vi ska koppla en anonym funktion som vid klick tar bort div-elementet (remove()?)
–eventet ska köras vid "click"
–div-elementet är theEmptyDiv
*/

/*inputfält:
–vi behöver loopa igenom alla inputfält för att ge dem eventlyssnare
–for-loopen vi gjort är korrekt. vi har dock gjort två olika. vi har kopplat fälten till handleClick, för den skriver ut till konsolen.
–jag lade till handleBlur också.
*/

/*checkbox:
–
*/