import { Client, Account, Models, Databases } from 'appwrite';

export const client = new Client();

client.setEndpoint('http://10.242.236.44/v1').setProject('iocl'); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
export type { Models };
