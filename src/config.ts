import * as dotenv from "dotenv";

dotenv.config()


/** Reading configurations from the .env file using the `dotenv` module and adding
 * it into the configuration object.
*/

export const config: any = {
    PORT: process.env.SERVICE_PORT
}