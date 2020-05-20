
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
    msg.channel.send("I CAN SEE THROUGH THE LIES OF THE JEDI");
});

client.on("message", msg => {
    if (msg.content === "ani") {
        msg.channel.send("YOU'VE GROWN");
    }

    
    //PENDING TO BE CHANGED> DON'T JUDGE ME BASED ON THIS
    else{
        switch (msg.content) {
            case "you turned her against me": msg.channel.send("You have done that yourself.")
            break;
        
            case "the jedi are evil": msg.channel.send("Well, then you are lost!")
            break;

            case "this is the end for you": msg.channel.send("It's over, Anakin. I have the high ground.")
            break;

            case "you underestimate my power": msg.channel.send("You were the chosen one!\nIt was said that you would destroy the Sith, not join them!\nBring balance to the Force...not leave it in darkness!")
                                                msg.channel.send("You were my brother, Anakin.\nI loved you.\n")
            break;

            case "Sith lord": msg.channel.send("Chancellor Palpatine, Sith lords are our speciality.")
            break;

            case "pls steal @DPR": msg.reply("So unciviliZed")
        }
    }
});





//log in with token
client.login(process.env.BOT_TOKEN);
