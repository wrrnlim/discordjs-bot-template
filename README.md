# Discord.js Bot Template

Starter code for a Discord bot, based on [Discord.js](https://discord.js.org/#/). The official guide can be found [here](https://discordjs.guide/).

## Use this template

Fork this repository and run `npm install` to begin.

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

Now we can add code for the bot. In this repo, we are using `.env` file to store our secrets. You do not want to commit or share this file, so be sure to add it to `.gitignore`. You need the following secrets for your bot to work:

- `CLIENTID`: Get this ID by going to your [Discord Application](https://discord.com/developers/applications/) and viewing the "General Information." Copy and paste the "Application ID" into `.env` after `CLIENTID=`
- `TOKEN`: This is your OAuth token. Make sure this is not shared with anyone, as it gives access to your bot. You can get this token in the "Bot" section and "Reset Token." This token is only shown once. Copy and paste it into `.env` after `TOKEN=`
- `GUILDID`: You only need this if you want to make commands that only work in a certain server. You can get this by enabling Developer Mode in Disocrd settings, then right clicking your server icon and selecting "Copy ID".

We can now run `npm run deploy` to make our slash commands available. Then we can run `npm start` to start the bot.

Follow the [official guide](https://discordjs.guide/creating-your-bot/#resulting-code) to understand more about the code in this template, and customize the bot for yourself!

## Deploy to Heroku

Heroku can host the code for your bot to keep it running 24/7. Firstly, we need a `Procfile`. Create a file named `Procfile` in your root directory, and add the following line within it:

```profile
worker: node index.js
```

`index.js` is the entry point of our app. If you named yours differently, replace it with the correct file name. This sets up a worker (called dynos in Heroku) to run your app. By default, Heroku will assume your app is a web app, which will not work for our bot.

Commit your code to your GitHub repository so we can deploy to Heroku. Go to [Heroku](https://www.heroku.com/) and create a new app. Select "Connect to GitHub," and find your repository.
![Heroku connect to GitHub](img/herokugh.png).

Next, enable auto deploy so every time you push to your production branch (`main` by default), your deployment would be updated too. Deploy by pushing to your `main` branch or using the manual deploy button.
![Auto deploy](img/autodeploy.png)

The worker dyno will be off by default. Navigate to the "Resources" tab -> ✏ on the worker dyno, and turn it on. Be sure to click confirm.
![Worker Dyno](img/workerdyno.png)

Finally, we need to add our environment variable so that our code on Heroku can access our bot. Navigate to your app's settings on Heroku, and add a `CLIENTID`, `TOKEN`, and `GUILDID` (if needed) variable.
![Config Vars](img/configvars.png)

You can view logs using the "More" button on the top right.
