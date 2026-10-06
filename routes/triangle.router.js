import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const rootDir = req.app.get("rootDir");
  res.sendFile(rootDir + "/views/triangle.html");
});

router.post("/", (req, res) => {
  const a = Number(req.body.height);
  const b = Number(req.body.width);
  const c = Number(req.body.sideC);
  if (a + b <= c || b + c <= a || a + c <= b) {
    res.send("Triangle is not Possible.");
  } else {
    const s=(a+b+c)/2
    const area =Math.sqrt(s*(s-a)*(s-b)*(s-c))
    res.send(`This Triangle Area is : ${area}`);
  }
});

export default router;
