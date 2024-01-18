import { connectToDatabase } from "./db.config.js";
import {server} from './server.js'
connectToDatabase
server.listen(process.env.PORT || 3000);
