
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Resend } from "resend";
import { render } from "@react-email/render";
import React from "react";
import EmailTemplateResend from "./emails/quintazur-contact";

const app = express();

const resend = new Resend("re_5uBik8Fa_6NbngSLWVvsjrgJomtgSNVSU");
app.use(cors());
app.use(express.json());
dotenv.config();


app.post("/send-email", async (req, res) => {

  const { nombre,
    apellidos,
    email,
    telefono,
    residencia } = req.body;


  // Renderiza tu template a HTML
  const html = await render(
    React.createElement(EmailTemplateResend, {
      nombre, apellidos, email, telefono, residencia,
    })
  );

  try {
    await resend.emails.send({
      from: "informes@quintazur.com",
      to: [email],
      cc: ["felix@polygonag.com"],
      subject: `Nuevo Contacto: ${nombre} ${apellidos}`,
      html: html
    });

    res
      .status(200)
      .json({ success: true, message: "Contacto enviado con éxito." });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error al enviar el contacto." });
  }
});



app.get("/", (req, res) => {
  res.send("HOME");
});


export default app;