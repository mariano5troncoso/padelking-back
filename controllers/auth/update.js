
export default async (req,res)=>{
    //logica para crear usuario
    // mongoose create()

    try {
        await User.create (req, body)
        return res.status(201).json({
            success: true,
            message: ' updated!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'error'
        })
        
    }
}