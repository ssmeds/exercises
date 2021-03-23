// Skapa en funktion som tar en string som argument och returnera reverse/omvänd värde

function reverseString(str) {
  let splitString = str.split(""); //splittar en string till en array
  let reverseArray = splitString.reverse(); //byter håll på arrayen
  let joinArray = reverseArray.join(""); //joinar arrayen till en string igen
  return joinArray; //returnerar den joinade stringen
}