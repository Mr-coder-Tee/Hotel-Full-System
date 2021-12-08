import Jwt from "jsonwebtoken";

const auth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization
        console.log(token,'<--------')
        next();
        
    } catch (error) {
        res.json({
            status:'401',
            message:error
        })
    }

}

export default auth