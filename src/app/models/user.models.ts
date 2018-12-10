export class User {
    type: String;
    isAuthenticated: boolean;

    constructor(){
        this.type = 'admin';
        this.isAuthenticated = false;
    }
}
