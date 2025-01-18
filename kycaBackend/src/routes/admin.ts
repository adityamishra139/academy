import {Router} from 'express'
import {PrismaClient} from '@prisma/client'
import {Request,Response} from 'express'


const routerA = Router();
const prisma = new PrismaClient();

routerA.get('/getAllFeedback' , async(req:Request,res:Response):Promise<void> =>{
    try{
        const feedback = await prisma.feedback.findMany();
        res.status(200).json({msg:"Success" , feedback:feedback})
        return
    }
    catch(e)
    {
        console.error(e);
        return
    }
})

routerA.post('/delFeedback' , async(req:Request,res:Response):Promise<void> => {
    const {id} = req.body
    try{
        const feedback = await prisma.feedback.delete({
            where:{
                id:id
            }
        })
        res.json({msg:"Success! Feedback deleted."})
    }
    catch(e)
    {
        console.error(e);
    }
})

routerA.post('/chooseFeedback' , async(req:Request,res:Response):Promise<void>=>{
    const {id} = req.body;
    try{
        const updateID = await prisma.feedback.findFirst({
            where:{
                id:id
            }
        })

        const feedback = await prisma.feedback.update({
            where:{
                id
            },
            data:{
                chosen:!updateID?.chosen
            }
        })
        res.json({msg:"success",feedback:feedback})
        return
    }
    catch(e)
    {
        res.json({"msg":"Error in changing feedback chosen state"})
        console.error(e);
        return
    }
})


export default routerA;