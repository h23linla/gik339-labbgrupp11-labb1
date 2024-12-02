const allTextFields = document.querySelectorAll(".textfield");
console.log(allTextFields);

const theBigButt = document.getElementById("changeSize");
console.log(theBigButt);

const theCheckBox = document.getElementById("divStyle");
console.log(theCheckBox);

const emptyDiv = document.getElementById("empty-div");
console.log(emptyDiv);

const colorField = document.getElementById("color");
console.log(colorField);


for(let i = 0; i <allTextFields.length; i++) {
    allTextFields[i].addEventListener("blur", handleBlur);
};


function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    const html = `<p>Fältet ${name} har värdet ${value}</p>`;
    emptyDiv.insertAdjacentHTML("beforeend", html);
    console.log("Konsollog: ", e);
}

function handleClick(e) {
    e.preventDefault();
    const targetName = e.target.id;

    const contentField = settings.content;

    emptyDiv.innerHTML = contentField.value;

    emptyDiv.insertAdjacentElement("afterend", theBigButt); /*i.A.E vill ha något man skapat med .createElement eller hämtat med getelementbyid = HTMLElement-objekt. det är därför vi inte kunde lägga till andra grejer än theBigButt där*/
    console.log(targetName); /*vi skriver ut ID:et på det vi tryckte på*/
    console.log("handleClick, eventobjekt: ", e);
}

theCheckBox.addEventListener("click", () => {
    const selectedColor = colorField.value.trim();
    if (selectedColor) {
        try {
            emptyDiv.style.backgroundColor = selectedColor;
        } catch (error) {
            console.error("Invalid error: ", selectedColor);
        }
    } else {
        console.warn("No color entered in the text field");
    }
});