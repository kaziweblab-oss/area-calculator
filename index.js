import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";

/*------------------
 Import Routes Here
 -------------------*/
import homeRouter from "./routes/home.router.js";
import circleRouter from "./routes/circle.router.js";
import triangleRouter from "./routes/triangle.router.js";

/*---------------------------
 Making global __rootDir Here
-----------------------------*/
const __fileName = fileURLToPath(import.meta.url);
const __rootDir = path.dirname(__fileName);

const app = express();
const PORT = 3000;

app.set("rootDir", __rootDir);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/circle", circleRouter);
app.use("/triangle", triangleRouter);

app.use((req, res) => {
  res.send("<h2>!!!404 Page Not Found.</h2>");
});

app.listen(PORT, () => {
  console.log(
    `Your server is successfully running at http://127.0.0.1:${PORT}`,
  );
});
