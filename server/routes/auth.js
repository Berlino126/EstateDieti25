import express from "express";
import { login, logout, register } from "../controllers/auth.js";
import passport from "passport";
import "../lib/passport.js"
import { verifyToken } from "../middleware/middleware.js";
import { getUploadedProperties } from "../controllers/user.js";
const router = express.Router();
//Autenticazione Base
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
//Autenticazione tramite API GOOGLE
// Rotta per iniziare il login con Google
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Callback dopo il login con Google
// Callback di Google
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
      const { token, user } = req.user;
  
      // Crea un URL con i dati dell'utente come query param
      const redirectUrl = `http://localhost:5173/login?token=${token}&id=${user.id}&username=${user.username}&email=${user.email}&role=${user.role}`;
          // Imposta il cookie "token_access"
    res.cookie("token_access", token, {
      maxAge: 1000 * 60 * 60 * 24, // 1 giorno
      domain: 'localhost',
      path: '/',
    });
      res.redirect(redirectUrl);
    }
  );
//Autenticazione tramite Git

router.get("/github", passport.authenticate("github", { scope: ["user:email"] }));


router.get(
    "/github/callback",
    passport.authenticate("github", { session: false }),
    (req, res) => {
      const { token, user } = req.user;
  
      // Crea un URL con i dati dell'utente come query param
      const redirectUrl = `http://localhost:5173/login?token=${token}&id=${user.id}&username=${user.username}&email=${user.email}&role=${user.role}`;
      
      res.redirect(redirectUrl);
    }
  );

  router.get("/getUploaded", verifyToken, getUploadedProperties)
export default router; 