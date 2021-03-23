// Skapa en funktion som tar en string som argument och returnera reverse/omvänd värde

function reverseString(str) {
  let splitString = str.split(""); //splittar en string till en array
  let reverseArray = splitString.reverse(); //byter håll på arrayen
  let joinArray = reverseArray.join(""); //joinar arrayen till en string igen
  return joinArray; //returnerar den joinade stringen
}

// Skapa en funktion som tar en string som argument och kan returnera true  om string är en palindrom och returnerar falsk om string inte är en  palindrom. 

function isPalindrome(str) {
  // console.log("str", str);
  let splitString = str.split(""); //Splittar stringen till en array
  // console.log("splitString", splitString);
  let reverseArray = splitString.reverse(); //vänder arrayen baklänges
  // console.log("reverseArray", reverseArray);
  let joinArray = reverseArray.join(""); //joinar arrayen till en string igen
  // console.log("joinArray", joinArray);

  //kollar om originalstringen och den nya omvända stringen är likadan
  if (str == joinArray) {
    // console.log("true");
    return true;
  } else {
    // console.log("false");
    return false;
  }
}

// isPalindrome("bobby");


// Skapa en funktion som tar tre argument till ex. en text , ett sökOrd och ett ersättOrd och returnerar ersätt ordet. 
// till ex . ReplaceFunktion(“ hello world” ,”world”, “fed20s”) kommer att returnera “hello fed20s”

function replaceWord(str, findWord, newWord) {
  console.log("str:", str);
  console.log("findWord:", findWord);
  console.log("newWord:", newWord);

  // ersätter sökordet oavsett stora eller små bokstäver till det nya ordet
  let result = str.replace(new RegExp(findWord, 'i'), newWord);
  console.log(result);
  return result;
}

replaceWord("hej på Du", "dU", "Dig lille vän");