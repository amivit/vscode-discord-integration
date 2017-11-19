'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { DiscordIntegration } from './discord-integration';
/**
 * 
 * 
 * @export
 * @param {vscode.ExtensionContext} context 
 */
export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "discord-integration" is now active!');

    const discordIntegration = new DiscordIntegration();
    
    let disposable1 = vscode.commands.registerCommand('extension.activate', () => {
        discordIntegration.connect();
    });

    let disposable2 = vscode.commands.registerCommand('extension.disable', () => {
        discordIntegration.disable();
    });

    context.subscriptions.push(disposable1, disposable2); // 123......
}

export function deactivate():void {
    console.log('discord-integration deactivated')
 }