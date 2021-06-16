import { Server } from './Server/Server'

class Launcher {

    name?: string;
    server: Server;

    constructor() {
        this.server = new Server;
    }

    public launchApp() {
        console.log("Is this working ???");
    }

}

new Launcher().launchApp();