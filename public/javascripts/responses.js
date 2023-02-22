function getBotResponse(input) {
    // Simple responses
   if (input == "hello") {
       return "Hello there!";
   } else if (input == "goodbye") {
       return "Talk to you later!";
   }else if (input == "how to donate blood") {
    return "you have to register and then contact the nearby bloodbanks";
}else {
       return "Try asking something else!";
   }
}