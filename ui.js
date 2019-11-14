/*global document*/
/*eslint no-undef: "error"*/
/*eslint prefer-const: "error"*/
/*eslint-env es6*/
/*eslint-disable*/

var dialogue = {
    "character": "Princess",
    "tutorial1": [
        {
            "emotion": "smile",
            "d": "Thank you for bringing my statue to life!"
        },
        {
            "emotion": "determined",
            "d": "Now we can finally stop <span id='red'>the bad guy</span>."
        },
        {
            "emotion": "neutral",
            "d": "First things first! You need to get him moving."
        },
        {
            "emotion": "neutral",
            "d": "Why don't you try having him run to <span>left</span> and stop at <span>that wall</span>?"
        }
    ],
    "tutorial2": [
        {
        "emotion": "excited",
            "d": "Great job!"
        }
    ]
}

const flask = new CodeFlask('#start', { language: 'js' });
const flask2 = new CodeFlask('#see', { language: 'js' });
const flask3 = new CodeFlask('#next', { language: 'js' });

var start = "";
var see = "";
var nextto = "";

document.getElementById("run-button").addEventListener("click", function() {
    start = flask.getCode();
    see = flask2.getCode();
    nextto = flask3.getCode();
});

function getStartCode(){
    return start;
}

function getSeeCode(){
    return see;
}

function getNextToCode(){
    return nextto;
}

var dropdown = document.getElementsByClassName("dropdown-btn");
//fix this whole mess
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
  });
}

var i = 0;
function test(){
    //edit html to show the current dialogue and only change when clicked
    //allow image to changed based on emotion dialogue.tutorialDialogue[i].emotion;
    document.getElementById("speech").innerHTML = dialogue.tutorial1[i].d;
    i += 1;
}

function tutorial(dlocation){
    document.getElementsByClassName("body").addEventListener("click", function(){
        if (dlocation == 1){
            document.getElementById("speech").innerHTML = dialogue.tutorial1[i].d;
            i += 1;
        }
        else if (dlocation == 2){
            document.getElementById("speech").innerHTML = dialogue.tutorial2[i].d;
            i += 1;
        }
        else {
            document.getElementById("speech").innerHTML = dialogue.tutorial3[i].d;
            i += 1;
        }
    });
}

//type the dialogue out
/*
var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};
var typed = new Typed('.element', options);
*/

//functions to hide/show dialogue box
var dbox = document.getElementById("dialogue");

function showDBox(){
    dbox.style.display = "block";
}

function hideDBox(){
    dbox.style.display = "none";
}

//functions to hide/show code editor
var editor = document.getElementById("code-editor");
var run = document.getElementById("run-button");
function showCodeEditor(){
    editor.style.display = "block";
    run.style.display = "block";
    
}

function hideCodeEditor(){
    editor.style.display = "none";
    run.style.display = "none";
}

//functions to hide/show inventory
var inventory = document.getElementById("inventory");

function showInventory(){
    inventory.style.display = "block";
}

function hideInventory(){
    inventory.style.display = "none";
}

function hideAll(){
    hideDbox();
    hideCodeEditor();
    hideInventory();
}
                                                    




