"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TELEGRAM_BOT_TOKEN = "Your bot API TOKEN is here, catch it from @botFather";
var Slimbot = require("slimbot");
var slimbot = new Slimbot(TELEGRAM_BOT_TOKEN);
slimbot.on("message", function (message) {
    console.log("msg");
    console.log(message);
    slimbot.sendMessage(message.chat.id, "You typed: " + message.text);
});
slimbot.on("callback_query", function (query) {
    console.log("QRY");
    console.log(query);
});
slimbot.startPolling();
//# sourceMappingURL=index.js.map