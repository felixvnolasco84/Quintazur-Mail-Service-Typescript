// Express.js API (backend)
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { Resend } from "resend";

// Load environment variables
dotenv.config();

// Check for required environment variables
if (!process.env.RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY is not set in your environment variables');
  console.log('Please make sure you have a .env.local file with RESEND_API_KEY=your_api_key');
  process.exit(1);
}

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

console.log('Server started with Resend API key configured');

app.use(cors());

app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send-email", async (req, res) => {
  const { firstn, email, phone, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "info@epiavontuur.mx",
      to: "info@epiavontuur.mx",
      cc: ["informes@quintazur.com"],
      subject: `Nuevo Contacto: ${subject}`,
      html: `<p><strong>Nombre:</strong> ${firstn}</p>
             <p><strong>Correo:</strong> ${email}</p>
             <p><strong>Teléfono:</strong> ${phone}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

