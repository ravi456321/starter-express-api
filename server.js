import server from "./index.js";
import { connectToDb } from "./config/db.js";

server.listen(4000, async () => {
  await connectToDb();
  console.log("server is listening on port 4000");
});
