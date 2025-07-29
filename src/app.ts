
import express from "express";
import cors from "cors";
import { Resend } from "resend";
import { render } from "@react-email/render";
import React from "react";
import EmailTemplateResend from "./emails/quintazur-contact";
import dotenv from "dotenv";

// Load environment variables first
dotenv.config();

// Check for required environment variables
if (!process.env.RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY is not set in your environment variables');
  console.log('Please make sure you have a .env.local file with RESEND_API_KEY=your_api_key');
  process.exit(1);
}

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());


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