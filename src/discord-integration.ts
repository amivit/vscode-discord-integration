import * as Discord from 'discord.js';
import { window } from 'vscode';

import { AppEnvironment } from './environment';
import { Presence, PresenceData } from 'discord.js';

export class DiscordIntegration {

  private client = new Discord.Client();

  connect(): void {
    this.client.on('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}!`);
      window.showInformationMessage('Discord succesfully logged in.');
      this.setActivity();
    });

     this.client.login(AppEnvironment.discordToken);
  }

  disable(): void {
    this.client = new Discord.Client();    
    window.showInformationMessage('Disconnected from Discord.');
  }

  private setActivity(): void {    
    const client = new Discord.Client();

    const x = new Discord.Presence(this.client);    

    const presenceData: PresenceData = {
      game: {
        name: 'Testing...',
        url: 'http://www.google.com/'
      },
    }; 

    this.client.user.setPresence(presenceData);
  }
}