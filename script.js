const theCheckBox = document.getElementById("divStyle");
console.log(theCheckBox);

const allTextFields = document.querySelectorAll(".textfield");
console.log(allTextFields);

const theBigButt = document.querySelector("#remove");
console.log(theBigButt);

const emptyDiv = document.getElementById("empty-div");
console.log(emptyDiv);

const colorField = document.getElementsByClassName("textfield")[0];
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

theCheckBox.addEventListener("change", () => {
    const selectedColor = colorField.value;
    if (selectedColor) {
        try {
            emptyDiv.style.backgroundColor = selectedColor;
        } catch (error) {
            console.error("Error: ", selectedColor);
        }
    } else {
        console.warn("Ingen angiven färg.");
    }
});

theBigButt.addEventListener("click", (e) => {
    e.preventDefault();
    if (emptyDiv) {
        emptyDiv.remove();
        console.log("Div-elementet har tagits bort.");
    }
});