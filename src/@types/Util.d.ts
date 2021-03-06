/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Discord from 'discord.js';
import Interactions from 'handlers/Interactions';
import BetterSqlite3 from 'better-sqlite3';

export const Interactions: InteractionsInterface;
export function delay(num: number): Promise<void>;
export function log(message: string, files: string[]): boolean;
export function LoadCommands(): Promise<void>;
export function DeployCommands(): Promise<void>;
export function fetchJSON(url: string): Promise<unknown>;
export function truncate(str: string, length: number, useWordBoundary: boolean): string;
export function normalize(num: number): string;
export function Avatars(): Promise<void>;
export function SetStat(stat: string, value: number): void;
export function IncreaseStat(stat: string, value?: number): void;
export function SQLBkup(): Promise<void>;

declare module 'discord.js' {
    interface Client {
        commands: Discord.Collection<string, Command>;
        events: Discord.Collection<string, Event>;
        owner: string;
        getStat: BetterSqlite3.Statement<unknown[]>;
        setStat: BetterSqlite3.Statement<unknown[]>;
        db: BetterSqlite3.Database;
    }
}

declare global {
    declare namespace NodeJS {
        export interface Process {
            alot: Discord.Client;
        }
    }
}

interface InteractionsInterface {
    SlashCommands(interaction: Discord.CommandInteraction, Util: unknown): Promise<void>;
}

interface secondsToDifferenceSettings {
    enableSeconds: boolean
}

interface Command {
    info: {
        roles: string[];
        user_perms: Discord.PermissionResolvable[];
        bot_perms: Discord.PermissionResolvable[];
    },
    data: Discord.ApplicationCommandData;
    async run(interaction: Discord.CommandInteraction, options: Discord.CommandInteractionOption[]): Promise<void>;
}

interface Event {
    name: string;
    once?: boolean;
    process?: boolean
    async run(...args: unknown[]): Promise<void>;
}