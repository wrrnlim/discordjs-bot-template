const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check the bot\'s latency'),
	async execute(interaction) {
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		await interaction.editReply(`Pong! We are ${sent.createdTimestamp - interaction.createdTimestamp}ms apart`);
	},
};