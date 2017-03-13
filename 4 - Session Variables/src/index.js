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
        this.emit(':ask', "Hi, what is your language?");
    },

    'LanguageIntent': function() {
        this.attributes['myLangauge'] = this.event.request.intent.slots.myLangauge.value;
        this.emit(':ask', "I got it.");
    },

    'TestIntent': function() {
        this.emit(':tell', "I still remember that your language is, " + this.attributes['myLangauge']);
    }
};
