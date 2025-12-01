const english = ["cat", "dog", "one", "pixel", "array", "word", "is", "my"];
const spanish = ["gato", "perro", "uno", "píxel", "la colección", "palabra", "es", "mi"];

function actionDesc() { // const log();
    let actions = [];

    return function(description) {
        if (description) {
            actions.push(description);
        }
        return (actions);
    }
}

function translateWord(word, from, to) { // contains word, the array from which it finds and which 
    const wordLwr = word.toLowerCase();
    const index = from.findIndex(enWord => enWord === wordLwr);

    if (index === -1) {
        return `?${word}?`;
    }

    return capitalization(to[index], word);
}

function capitalization(word, cap) {
    if (/[A-Z]/.test(cap)) {
        return word[0].toUpperCase() + word.slice(1);
    }
    else {
        return word;
    }
}

function translateText(text, which) {

    const textArray = text.split(" ");
    const translatedText = [];

    if (which === 1) {
        textArray.forEach(element => {
        translatedText.push(translateWord(element, english, spanish));
    });
    }
    else {
        textArray.forEach(element => {
        translatedText.push(translateWord(element, spanish, english));
    });
    }

    return translatedText.join(" ");

}

// for html test

let language = 1;
const inputText = document.getElementById("inputText");
const translateBtn = document.getElementById("translateBtn");
const spanishBtn = document.getElementById("spanishBtn");
let isSpClicked = false;
const englishBtn = document.getElementById("englishBtn");
let isEnClicked = false;
const outputDiv = document.getElementById("output");

translateBtn.addEventListener("click", () => {
    const text = inputText.value;
    const translated = translateText(text, language);
    outputDiv.textContent = translated;
});

spanishBtn.addEventListener("click", () => { //oops 
    if (!isSpClicked) {
        spanishBtn.style.backgroundColor = "green";
        spanishBtn.style.color = "white";

        englishBtn.style.backgroundColor = "";
        englishBtn.style.color = "";

        isSpClicked = true;
        isEnClicked = false;
    } else {
        spanishBtn.style.backgroundColor = "";
        spanishBtn.style.color = "";
        isSpClicked = false;
    }
    language = 0;

});

englishBtn.addEventListener("click", () => {
    if (!isEnClicked) {
        englishBtn.style.backgroundColor = "green";
        englishBtn.style.color = "white";

        spanishBtn.style.backgroundColor = "";
        spanishBtn.style.color = "";

        isEnClicked = true;
        isSpClicked = false;
    } else {
        englishBtn.style.backgroundColor = "";
        englishBtn.style.color = "";
        isEnClicked = false;
    }
    language = 1;
});