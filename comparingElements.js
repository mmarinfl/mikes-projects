// Note: We can initialize an array by putting the list of elements in sqaure brackets.
// Also note that javascript is loosely typed - which means it allows us to mix types in our arrays...
// And that can cause all sorts of confustion.
// Mixing element types like this is *bab* practice.
// We are doing this to show you how javascript can do these and how JavaScript can treat strings like Numbers
var testArray = [0, 1, 1, "1", 3, "311"];

// For each of the elements in our array
for (var arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPosition++) {
  var currentElement = testArray[arrayPosition];
  var nextElement = testArray[arrayPosition + 1];
  console.log("testing " + currentElement + " and " + nextElement + "(greater than): " + (currentElement > nextElement));
  console.log("testing " + currentElement + " and " + nextElement + "(less than or equal to): " + (currentElement <= nextElement));
  if (currentElement == nextElement) {
    console.log("testing " + currentElement + " and " + nextElement + "(strictly equal to): " + (currentElement === nextElement));
    if (currentElement !== nextElement) {
      console.log(currentElement + " is " + typeof(currentElement));
      console.log(nextElement + " is " + typeof(nextElement));
    }
  } else {
    console.log("testing " + currentElement + " and " + nextElement + "(equal to): false");
  }

}
