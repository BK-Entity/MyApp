/** 
 * Author: Bradley Klein
 * Date: 11/25/2020
 * This: lab12.js
 * Purpose: Create a mobile application.
 */

/**
 * Takes in
 * name, faith, gender, alignment, race, charClass
 * Then saves the character details.
 */
function saveCharacter() {
    // This will grab all the element's value entered, then save it (hopefully) to local storage.
    let name = document.getElementById('name').value;
    let faith = document.getElementById('faith').value;
    let gender = document.getElementById('gender').value;
    let alignment = document.getElementById('alignment').value;
    let race = document.getElementById('race').value;
    let charClass = document.getElementById('charClass').value;
    // This will save the items from the form
    localStorage.setItem('name', name);
    localStorage.setItem('faith', faith);
    localStorage.setItem('gender', gender);
    localStorage.setItem('race', race);
    localStorage.setItem('charClass', charClass);
    //
    document.getElementById('name').value = "Added to Cart";
  	document.getElementById('faith').value = "Added to Cart";
	document.getElementById('gender').value = "Added to Cart";
    document.getElementById('race').value = "Added to Cart";
    document.getElementById('charClass').value = "Added to Cart";

    localStorage.setItem('alignment', alignment);
    document.getElementById('alignment').value = "Added to Cart";
    //Due to the nature of these, it sends the whole thing to caps for testing
    //let r = race.charAt(0).toUpperCase() + race.slice(1);
    let r = race.toLowerCase();
    if (race !== "" && alignment == "") {
        align(r);
    }
    // This is so the form doesn't insta poof the items
    return false;
}
/**
 *  @param {string} r - Takes in the race chosen and auto-aligns them based on default alignment
 */
function align(r) {
    switch (r) {
        case "human": document.getElementById('alignment').value = "Neutral";
        break;
        case "elf": document.getElementById('alignment').value = "Chaotic Good";
        break;
        case "dark elf": document.getElementById('alignment').value = "Chaotic Good";
        break;
        case "wood elf": document.getElementById('alignment').value = "Chaotic Good";
        break;
        case "dwarf": document.getElementById('alignment').value = "Lawful Good";
        break;
        case "gnome": document.getElementById('alignment').value = "Neutral Good";
        break;
        case "halfling": document.getElementById('alignment').value = "Lawful Good";
        break;
        case "half orc": document.getElementById('alignment').value = "Chaotic Evil";
        break;
        case "dragonborn": document.getElementById('alignment').value = "Chaotic Neutral" ;
        break;
        case "tiefling": document.getElementById('alignment').value = "Chaotic Evil";
        break;
    }
}
function set() {
    //set the value of each text field from the stored values:
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('faith').value = localStorage.getItem('faith');
    document.getElementById('gender').value = localStorage.getItem('gender');
    document.getElementById('alignment').value = localStorage.getItem('alignment');
    document.getElementById('race').value = localStorage.getItem('race');
    document.getElementById('charClass').value = localStorage.getItem('charClass');
}
function reset() {
    // Removes the current items so you can create a new character
    localStorage.removeItem('name');
    localStorage.removeItem('faith');
    localStorage.removeItem('gender');
    localStorage.removeItem('alignment');
    localStorage.removeItem('race');
    localStorage.removeItem('charClass');
    // Sets the inputs as blank
    document.getElementById('name').value = " ";
  	document.getElementById('faith').value = " ";
	document.getElementById('gender').value = " ";
  	document.getElementById('alignment').value = " ";
	document.getElementById('race').value = " ";
    document.getElementById('charClass').value = " ";
}
/**
 * Decides best stats based on race and class chosen
 * @param {string} r - Race
 * @param {string} c - Character Class
 */
function statDecider(r, c) {

}
/**
 * 
 */
function saveClass() {

    // This is so the form doesn't insta-poof the stuff
    //return false;
}