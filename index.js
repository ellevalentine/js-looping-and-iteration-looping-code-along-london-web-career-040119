
//build a function named writeCards() that accepts two arguments: an array of string names, and an event name.

function writeCards( namesArray, event ) {

  let thankYouCards = [] // create an empty array thankYouCards

// Create a for loop with a counter that starts at 0 and increments at the end of each loop.The condition should halt the for loop after the last name in the array is printed out in the loop body.
  for ( let i = 0; i < namesArray.length; i++ ) {
// Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift.
// Collect the messages in an array and return this array. - done using the push method which will add elements to the end of the thankYouCards array.
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` ) // here we use interpolation to grab the parameters passed in the arguemtns
  }
  return thankYouCards // return the updated array
}


//write a function, countdown, that takes in any positive integer and, starting from that number, counts down to zero using console.log()

function countdown( countdown ) { // passes an interger
  while ( countdown > 0 ) {  // that integer passed has to be greater than 0 (positive integer) - hence when it reaches 1 the loop will stop 
    console.log( countdown ); // log this to console and return
    countdown -= 1; // decrement at every loop
  }
  console.log( countdown ); // log this to console and return
}
