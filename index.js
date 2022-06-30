const fs = require('node:fs');
const path = require('node:path');
// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Get commands from the commands folder
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Listen for interactions
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  // const { commandName } = interaction;

  // if (commandName === 'ping') {
  //   const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
  //   interaction.editReply(`Pong! We are ${sent.createdTimestamp - interaction.createdTimestamp}ms apart`);
  // } else if (commandName === 'server') {
  //   await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
  // } else if (commandName === 'user') {
  //   await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
  // }

  const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Sorry, I couldn\'t execute this command!', ephemeral: true });
	}
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);