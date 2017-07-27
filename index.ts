//const TELEGRAM_BOT_TOKEN: string = "Your bot API TOKEN is here, catch it from @botFather";
const TELEGRAM_BOT_TOKEN: string = "426005210:AAHYnFXgkkEvfn9CaxR0Ko9JrA92ikWE8sU";
import * as Slimbot from "slimbot";

const slimbot: Slimbot = new Slimbot(TELEGRAM_BOT_TOKEN);



// register listener
slimbot.on("message", message => {
  console.log("msg");
  console.log(message);
  slimbot.sendMessage(message.chat.id, "You typed: "+message.text);

});

// because each inline keyboard button has callback data, you can listen for the callback data and do something with them

slimbot.on("callback_query", query => {
  console.log("QRY");
  console.log(query);

});

// call API
slimbot.startPolling();

// now try talking to your bot, and click on the Hello button. Your bot should reply you with "Hello to you too!".
