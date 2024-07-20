import { Client, Account, Models } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://appwrite.xeve.dev/v1').setProject('rapl'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export type { Models };
