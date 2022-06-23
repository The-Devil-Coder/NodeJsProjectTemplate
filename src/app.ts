import {default as express} from "express";
import {config} from "./config"


/**App constructer class to create an express app. It have `run` method to start the express server.
 * It also have the singleTon demonstration
*/

export class ConstructApp {
    private static _instance = new ConstructApp();
    private port: Number;
    private app: express.Application;

    constructor() {
        this.port = config.PORT;

        // Creating express app
        this.app = express();
    }
    
    // User ConstructAPP.instance to get singleTon object
    static get instance() {
        return this._instance;
    }

    public run() {
        // Start express server on configured PORT
        this.app.listen(this.port, () => {
            console.log(`Service is running on port ${this.port}!!`)
        })
    }
}

const app = ConstructApp.instance;
app.run()
