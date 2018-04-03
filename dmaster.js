const Discord	= require("discord.js");
const client	= new Discord.Client();
const config	= require("./config.json");

client.on("ready", () => {
	console.log("Estoy listo!");
});

var prefix		= config.prefix;

client.on("message", (message) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	switch (command) {
		case 'ping':
			message.channel.send("pong!");
		break;
		
		case 'bola8':
			let texto = args.join(" ");
			var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
			if (!texto) return message.reply(`Escriba una pregunta.`);
			message.channel.send(message.member.user+' a su pregunta `'+texto+'` mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
		break;
		
		case 'kick':
		
			let user = message.mentions.users.first();
			let razon = args.slice(1).join(' ');
    
			if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
			if (!razon) return message.channel.send('Escriba una razón, `/kick @username [razón]`');
			if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
			 
			message.guild.member(user).kick(razon);
			message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
		break;
	}
	
});

client.login(process.env.BOT_TOKEN);
