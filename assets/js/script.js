/*Name*/ /*Sugestion: find out how to save all informations in localStorange, and show even if users refresh page*/
const formname = document.querySelector('.form__question--name');
const suitcaseName = document.querySelectorAll('.suitcase__name');
const initialText = document.querySelector('.suitcase__initialText');

function showName() {
    formname.onsubmit = function(e) {
        e.preventDefault();
    
        for (let i = 0; i < suitcaseName.length; i++) {
            suitcaseName[i].innerHTML = this.name.value;
        }
        initialText.innerHTML = "Continue preenchendo o questionário para completar sua mala.";

        this.name.value = "";
    }
}

showName();

/*Total duration*/
const formTotalDuration = document.querySelector('.form__question--totalDuration');
const amountOfLingerie = document.querySelector('.amountOf__lingerie'); 
const amountOfPajama = document.querySelector('.amountOf__pajama'); 
const amountOfBikini = document.querySelector('.amountOf__bikini');
const amountOfBeachRobe = document.querySelector('.amountOf__beachRobe');

function calculateItens() {
    formTotalDuration.onsubmit = function(e) {
        e.preventDefault();
        

        if(this.totalDuration.value < 4) {
            amountOfLingerie.innerHTML = parseInt(this.totalDuration.value) + 2;
            amountOfPajama.innerHTML = 1;
            amountOfBikini.innerHTML = "no máximo 2";
            amountOfBeachRobe.innerHTML = "1 ou 2";
        } else if (this.totalDuration.value < 15) {
            amountOfLingerie.innerHTML = parseInt(this.totalDuration.value) + 2;
            amountOfPajama.innerHTML = parseInt(this.totalDuration.value) / 2; 
            amountOfBikini.innerHTML = "no máximo 3";
            amountOfBeachRobe.innerHTML = "2";
        } else {
            amountOfPajama.innerHTML = 5;
            amountOfLingerie.innerHTML = 18;
            amountOfBikini.innerHTML = "no máximo 4";
            amountOfBeachRobe.innerHTML = "3 ou 4";
        }

        this.totalDuration.value = "";

    
       
    }
}

calculateItens();

/*Temperature variation*/ /* TODO: find out how to uncheck all checkboxes at the end */
const formTemperatureVariation = document.querySelector('.form__question--temperatureVariation');

const temperatureDuration = document.querySelectorAll('.temperatureDuration');

const moreThan25clothing = document.querySelectorAll('.moreThan25clothing');
const t20and25clothing = document.querySelectorAll('.t20and25clothing');
const t15and20clothing = document.querySelectorAll('.t15and20clothing');
const t10and15clothing = document.querySelectorAll('.t10and15clothing');
const lessThan10clothing = document.querySelectorAll('.lessThan10clothing');

function checkTemperatureVariation() {
    formTemperatureVariation.onsubmit = function(e) {
        e.preventDefault();

        function activeInputs() {
            if(e.target.elements['tv--tMoreThan25'].checked == true){
                temperatureDuration[0].disabled = false;
                temperatureDuration[0].required = true;
            }
            if(e.target.elements['tv--t20and25'].checked == true) {
                temperatureDuration[1].disabled = false;
                temperatureDuration[1].required = true;
            }
            if(e.target.elements['tv--t15and20'].checked == true) {
                temperatureDuration[2].disabled = false;
                temperatureDuration[2].required = true;  
            }
            if(e.target.elements['tv--t10and15'].checked == true) {
                temperatureDuration[3].disabled = false;
                temperatureDuration[3].required = true;   
            }
            if(e.target.elements['tv--t5and10'].checked== true) {
                temperatureDuration[4].disabled = false;
                temperatureDuration[4].required = true;    
            }
            if(e.target.elements['tv--t0and5'].checked == true) {
                temperatureDuration[5].disabled = false;
                temperatureDuration[5].required = true;    
            }
            if(e.target.elements['tv--tNegative'].checked == true) {
                temperatureDuration[6].disabled = false;
                temperatureDuration[6].required = true;  
            }
        }

        function showClothing() {
            for(i = 0; i < moreThan25clothing.length; i++) {
                if(e.target[1].checked == true) {
                    moreThan25clothing[i].hidden = false;
                }
            }   
            for(i = 0; i < t20and25clothing.length; i++) {
                if(e.target[2].checked == true) {
                    t20and25clothing[i].hidden = false;
                }
            }
            for(i = 0; i < t15and20clothing.length; i++) {
                if(e.target[3].checked == true) {
                    t15and20clothing[i].hidden = false;
                }
            }
            for(i = 0; i < t10and15clothing.length; i++) {
                if(e.target[4].checked == true) {
                    t10and15clothing[i].hidden = false;
                }
            }
            for(i = 0; i < lessThan10clothing.length; i++) {
                if(e.target[5].checked == true || e.target[6].checked == true || e.target[7].checked == true) {
                    lessThan10clothing[i].hidden = false;
                }
            }
        }


        activeInputs();
        showClothing();
    }
}

checkTemperatureVariation();

/*Temperature duration*/ /* TODO: find out how to clear all the fields at the end */
const formTemperatureDuration = document.querySelector('.form__question--temperatureDuration')

const amountOf__dress = document.querySelectorAll('.amountOf__dress');


function checkTemperatureDuration() {
    formTemperatureDuration.onsubmit = function(e) {
        e.preventDefault();
        
        this.duration__moreThan25.value = "";
        this.duration__t20and25.value = "";
        this.duration__t15and20.value = "";
        this.duration__t10and15.value = "";
        this.duration__t5and10.value = "";
        this.duration__t0and5.value = "";
        this.duration__tNegative.value = "";
    }
}

checkTemperatureDuration();



/*Scenary*/ /* TODO: find out how to uncheck all checkboxes at the end */
const formScenary = document.querySelector('.form__question--scenary');

const waterClothing = document.querySelectorAll('.waterClothing');
const snowClothing = document.querySelectorAll('.snowClothing');
const mountainClothing = document.querySelectorAll('.mountainClothing');

function checkScenary() {
    formScenary.onsubmit = function(e) {
        e.preventDefault();

        for(i = 0; i < waterClothing.length; i++) {
            if (e.target.elements['checkbox--water'].checked == true) {
                waterClothing[i].hidden = false;
            }
        }
        for(i = 0; i < snowClothing.length; i++) {
            if (e.target.elements['checkbox--snow'].checked == true) {
                snowClothing[i].hidden = false;
            }
        }
        for(i = 0; i < mountainClothing.length; i++) {
            if (e.target.elements['checkbox--mountain'].checked == true) {
                mountainClothing[i].hidden = false;
            }
        }
    }
}

checkScenary();

/*Event*/ /* TODO: find out how to uncheck all checkboxes at the end */
const formEvento = document.querySelector('.form__question--event');

function checkEvent() {
    formEvento.onsubmit = function(e) {
        e.preventDefault();

        if(e.target.elements['checkbox--nothing'].checked == true) {
            console.log("Nada");
        }
        if(e.target.elements['checkbox--party'].checked == true) {
            console.log("Balada");
        }
        if(e.target.elements['checkbox--formal'].checked == true) {
            console.log("Festa Formal");
        }
        if(e.target.elements['checkbox--costume'].checked == true) {
            console.log("Festa a fantasia");
        }
    }
}

checkEvent();

/*Anything else*/ 
const formAnythingElse = document.querySelector('.form__question--anythingElse');
const extraItemsList = document.querySelector("#list__extraItems");

function checkAnythingElse() {
    formAnythingElse.onsubmit = function(e) {
        e.preventDefault();

        createAEElement(this.aEItem.value, this.aEAmountOf.value);
        this.aEItem.value = "";
        this.aEAmountOf.value = "";
    }
}

function createAEElement(aEIName, aEAmountOf) {
    const newAEItem = document.createElement('li');
    newAEItem.classList.add("extraItem");
    newAEItem.classList.add("suitcase__item");

    const newAEIName = document.createElement('span');
    newAEIName.innerHTML = aEIName + ": ";

    newAEItem.appendChild(newAEIName);
    newAEItem.innerHTML += aEAmountOf;

    extraItemsList.appendChild(newAEItem);
    console.log(newAEItem.classList)
}

/*<li class="suitcase__item extraItem" hidden>Item extra</li>*/
checkAnythingElse();