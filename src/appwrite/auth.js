import conf from '../conf/conf.js';
import { Client, Account, Id } from 'appwrite';


export class AuthService {
    client = new Client();
    account;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
                   .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);           
    }

    // getCurrentUser 
    async getCurrentUser(){
        try {
          return await this.account.get();
        } catch (error) {
            console.log('appwrite-getCurrentUser',error);
        }
        return null;
    }

    // login method
    async login({email, password}){
        try {
           return await this.account.createEmailSession(email, password);

        } catch (error) {
            console.log('appwrite-login',error);
        }
    }

    // logout method
    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log('appwrite-logout',error);
        }
    }
}


const authService = new AuthService();
export default authService