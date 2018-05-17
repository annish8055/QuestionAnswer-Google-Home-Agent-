/*
This is a question answer skill which is being used for learning purposes
*/ 
const functions = require('firebase-functions');
const {
    dialogflow,
    Suggestions,
    basicCard,
    Button,
    SimpleResponse,
}= require('actions-on-google');

const app = dialogflow({debug: true});

app.intent('Questions',(conv,{answer})=>{
    console.log("==========Conv Value===========",conv,"=========Conv End======");
    if(conv.data.count==undefined){
        conv.data.count = 1;
        console.log("---------Count from if------",conv.data.count);
    }else{
        conv.data.count = parseInt(conv.data.count, 10);
        conv.data.count++;
        console.log("---------Count from else------",conv.data.count);
    }
console.log("---------USER storage------",conv.user.storage);
conv.user.storage = {answer};
conv.ask('You said'+answer);
});


exports.questionAnswer = functions.https.onRequest(app);


