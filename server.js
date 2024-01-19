import server from "./index.js";
import { connectToDb } from "./src/config/db.js";

server.listen(process.env.PORT, async () => {
  await connectToDb();
  console.log("server is listening on port 4000");
});
