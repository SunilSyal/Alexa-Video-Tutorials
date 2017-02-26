var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function() { //Executes when a new session is launched
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        this.emit(':ask', "Hi, what is you number?");
    },

    'NumberIntent': function() {
        var myNumber = this.event.request.intent.slots.myNumber.value;
        this.emit(':tell', "Your number is " + myNumber);
    }
};
