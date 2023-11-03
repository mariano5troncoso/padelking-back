// controllers/auth/forgotPasswordController.js
import nodemailer from 'nodemailer';
import crypto from 'crypto'; // Import the crypto module
import User from '../../models/User.js';

export default async (req, res, next) => {
  try {
    const { email } = req.body;

    // Find the user based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found with the provided email.',
      });
    }

    // Generate a reset token for the user
    const resetToken = crypto.randomBytes(20).toString('hex'); // Generate a secure token

    // Save the reset token and expiration date in the user document
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 600000; // Token valid for 1o min
    await user.save();

    // Send the password reset email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'santyperez145s@gmail.com', // Tu dirección de correo electrónico de Gmail
        pass: 'yaqg rwof cjke kjco',   // Contraseña de aplicación generada en Gmail
      },
    });

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`; // Include the reset token in the reset link

    const mailOptions = {
      from: 'santyperez145s@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      html: `
      <img src"https://i.postimg.cc/CK8g6nFX/Logo-Fast-Commerce.png" style="heigh:200px">
      <p>Click the link to reset your password: <a href="${resetLink}">${resetLink}</a></p>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: 'Failed to send password reset email.',
          error,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Password reset email sent successfully.',
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Error during password reset process.',
      error,
    });
  }
};