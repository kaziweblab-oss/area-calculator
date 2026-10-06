import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    const rootDir=req.app.get('rootDir')
  res.sendFile(rootDir+'/views/circle.html');
});

router.post('/',(req,res)=>{
    const r =req.body.ratio
    const area=(22/7)*(r*r)

    res.send(`This Circle area is : ${area}`)
})



export default router;
