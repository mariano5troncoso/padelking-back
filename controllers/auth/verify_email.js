import User from "../../models/User.js";

export default async (req, res, next) => {
    const verify_code = req.params.verify_code
    try {
        const user = await User.findOne({ verify_code });
    
        if (!user) {
          return res.status(404).json({ message: 'Invalid verification code.' });

        }else if ( user.verified )
        return res.status(404).json("User already verified")

        else{
        user.verified = true;
        user.role = 1;
        await user.save();
        }
    
        return res.status(200).json({ message: 'Account verified successfully.' });
        
      } catch (error) {
        next(error);
      }
    }