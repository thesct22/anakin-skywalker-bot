
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
            case "Let her go": msg.channel.send("you turned her against me")
            break;
        
            case "You have done that yourself.": msg.channel.send("You will not take her from me!")
            break;

            case "Your anger and your lust for power have already done that.": msg.channel.send("Don't lecture me, Obi-Wan. I see through the lies of the Jedi.")
            msg.channel.send("I do not fear the dark side as you do. I have brought peace, freedom, justice and security to my new empire.")
            break;
        
            case "Your new empire?": msg.channel.send("Don't make me kill you.")
            break;

            case "Anakin, my allegiance is to the Republic, to democracy!": msg.channel.send("If you're not with me, then you're my enemy!")
            break;

            case "Only a Sith deals in absolutes. I will do what I must.": msg.channel.send("You will try.")
            break;

            case "I have failed you, Anakin. I have failed you":msg.channel.send("I should have known the Jedi were plotting to take over.")
            break;

            case "Anakin, Chancellor Palpatine is evil!": msg.channel.send("From my point of view, the Jedi are evil.")
            break;

            case "Well, then you are lost!": msg.channel.send("This is the end for you, my master.")
            break;

            case "It's over, Anakin. I have the high ground.": msg.channel.send("You underestimate my power.")
            break;

            case "Bring balance to the Force.not leave it in darkness!": msg.channel.send("I hate you!")
            break;
            
            case "Henceforth, you shall be known as Darth Vader.":msg.channel.send("Thank you, my master.")
            break;
        }
    }
});





//log in with token
client.login(process.env.BOT_TOKEN);
