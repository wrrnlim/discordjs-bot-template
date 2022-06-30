const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();

const commands = [];

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENTID), { body: commands }) // If you want server specific commands, use Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID)
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);