

let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let myArrayResults = [];
let resultsDiv = document.getElementById('results');
let divTemp = document.getElementById('divTemp');
let message = document.getElementById('message');
let strResultsInitialValue;
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
      setHiddenFields();
      myArrayResults = []; //setting it to on empty array
      strResultsInitialValue = resultsDiv.innerHTML;
    };
    //----------



    //----------
    console.log(input.value);
    if(!validateInput(input.value)){
      return;//--this will stoping the execution of guess()

    }
    //--otherwise: carry on and increament attempt    
      var myAttemptNumverValue = 0;
      myAttemptNumverValue = Number(attempt.value);
      myAttemptNumverValue = myAttemptNumverValue + 1;
      attempt.value = myAttemptNumverValue;
      //-----
      getResults(input.value);




    console.log("attempt.value: " + attempt.value);


    divTemp.innerHTML = "answer: " + answer.value + "<br/>" + "attempt: " + attempt.value;


}

//implement new functions here

function setHiddenFields()
{
  let myRandomNumber = Math.floor(Math.random() * 9999);
  let strRandomNumber = myRandomNumber.toString();
  while(strRandomNumber.length < 4){
    strRandomNumber = "0" + strRandomNumber;
  }
  answer.value = strRandomNumber;
  //------------------------------------------------------
  attempt.value = 0;

  //-----------------------------------------------------

}

function setMessage(messageText){

  message.innerHTML = messageText;
}

function validateInput(valueToValidate){
console.log("hello!");
  if(valueToValidate.length == 4){
        setMessage("");
    return true;
  }
  else
  {
      setMessage("Guesses must be exactly 4 characters long.");
      return false;

  };
}

function getResults(uerGuessResult){
  //--myArrayResults
  //myArrayResults.push(uerGuessResult);
  let myHtml = '';
  myHtml = '<div class="row"><span class="col-md-6">' + uerGuessResult + '</span><div class="col-md-6">';
  for(i=0; i < uerGuessResult.length; i++){
    if(uerGuessResult.charAt(i) == answer.value.charAt(i)){
      myHtml = myHtml + '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if (answer.value.indexOf(uerGuessResult.charAt(i)) > -1){
      myHtml = myHtml + '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else{
      myHtml = myHtml + '<span class="glyphicon glyphicon-remove"></span>';
    }

  }


  myHtml = myHtml + '</div></div>';
  myArrayResults.push(myHtml);



  //
resultsDiv.innerHTML = strResultsInitialValue;
//myArrayResults.forEach(myFunctionForArrayForEach);
for(i = 0; i < myArrayResults.length; i++){
  resultsDiv.innerHTML = resultsDiv.innerHTML
                      + myArrayResults[i];
}




  //
 console.log("myArrayResults.length: " + myArrayResults.length);

}

// function myFunctionForArrayForEach(item, index) {
//     resultsDiv.innerHTML = resultsDiv.innerHTML
//                         + '<div class="row"><span class="col-md-6">' + item + '</span><div class="col-md-6">'
//                         + '</div></div>';
// }
//setHiddenFields();
