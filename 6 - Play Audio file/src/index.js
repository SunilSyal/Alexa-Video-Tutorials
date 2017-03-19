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
        this.emit(':tell', "Let's enjoy a world's most beautiful composition, composed by the great, Sunil Syal, <audio src='https://my-apis.000webhostapp.com/audio/Romantic%20Solitude-Instrumental%20(Flute).mp3'/> Wow, That is amazing. Click the link on top right corner to listen to full song.");
    }
};
