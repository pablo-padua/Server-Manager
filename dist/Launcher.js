"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server/Server");
class Launcher {
    constructor() {
        this.server = new Server_1.Server;
    }
    launchApp() {
    }
}
new Launcher().launchApp();
