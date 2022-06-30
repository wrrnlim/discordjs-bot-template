# Discord.js Bot Template

Starter code for a Discord bot, based on [Discord.js](https://discord.js.org/#/). The official guide can be found [here](https://discordjs.guide/).

## Set up a Discord application and create a bot

Firstly, we need to set up a Discord application. We can do this by going to [Discord Developer Portal](https://discord.com/developers/applications) -> New Application. Once we have an application, we can create a bot for it.

In the sidebar, click on "Bot" and add a new bot:
![Buil-a-bot](img/buildabot.png)

Confirm that you want to add the bot. Bots cannot be deleted. If you do not want others to be able to invite your bot to their server, you can toggle off public bot: ![private-bot](img/privatebot.png)

Now you can invite the bot to your server. Navigate to OAuth2 -> URL Generator. Select `bot` and `applications.commands` for scopes. These scopes allow your bot to interact with users and add [slash commands](https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ) respectively.
![scopes](img/scopes.png)

For bot permissions, select the permissions that your bot will require. This depends on what kind of bot you want to build. A poll bot for example may not need administrator permissions. It is always a good idea to only give the permissions the bot requires. For simplicity in this example, we will give it administrator permissions.
![permissions](img/permissions.png)

Open the generated URL, and you will be able to invite the bot to your server.

## Code the bot

Now we can add code for the bot. In this repo, we are using `.env` file to store our secrets.
