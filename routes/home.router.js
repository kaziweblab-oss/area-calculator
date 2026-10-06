import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    const rootDir=req.app.get('rootDir')
    res.sendFile(rootDir + '/views/index.html')
    
    // res.send(rootDir)
})

export default router