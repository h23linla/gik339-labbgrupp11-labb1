const theCheckbox = document.getElementsByClassName("sub-section_three");
console.log(theCheckbox); /*Här kollar vi att vi hämtat upp input och sparat till variabeln*/

const allTextFields = document.querySelectorAll(".textfield");
console.log(allTextFields); /*Här kollar vi att vi hämtat upp alla textfält och sparat till variabeln*/

const theBigButt = document.getElementById("changeSize");
console.log(theBigButt); /*Här kollar vi att vi hämtat upp knappen och sparat till variabeln*/

const theEmptyDiv = document.querySelector("#empty-div");
console.log(theEmptyDiv); /*Här kollar vi att vi hämtat upp den tomma diven och sparat till variabeln*/

for(let i = 0; i <allTextFields.length; i++) {
    allTextFields[i].addEventListener("click", handleClick);
}

allTextFields.forEach((field) => {
    field.addEventListener("blur", handleBlur);
});


function handleBlur(e) {
    const name = e.target.name;
    const value = e.target.value;
    const html = `<p>Fältet ${name} har värdet ${value}</p>`;
    theEmptyDiv.insertAdjacentHTML("beforeend", html);
}

function handleClick(e) {
    e.preventDefault();
    const targetName = e.target.id;

    const colorField = settings.color;
    const contentField = settings.content;

    theEmptyDiv.style.backgroundColor = colorField.value;
    theEmptyDiv.innerHTML = contentField.value;

    theEmptyDiv.insertAdjacentElement("afterend", theBigButt);
    console.log(targetName);
    console.log("handleClick, eventobjekt: ", e);
}