const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('View the bot\'s uptime'),
  async execute(interaction) {
    let totalSeconds = (interaction.client.uptime / 1000);
    const days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    if (days > 0) await interaction.reply(`I have been up for ${days}d ${hours}h ${minutes}m ${seconds}s`);
    else if (hours > 0) await interaction.reply(`I have been up for ${hours}h ${minutes}m ${seconds}s`);
    else if (minutes > 0) await interaction.reply(`I have been up for ${minutes}m ${seconds}s`);
    else if (seconds > 0) await interaction.reply(`I have been up for ${seconds}s`);
  },
};