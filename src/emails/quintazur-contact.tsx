
import * as React from "react";

import {
    Body,
    Button,
    Container,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";


interface Props {
    nombre: string;
    apellidos: string;
    email: string;
    telefono: string;
    residencia: string;
}


const testData = {
    nombre: "Felix",
    apellidos: "Vega",
    email: "felix@polygonag.com",
    telefono: "123456789",
    residencia: "Madrid",
}

const EmailTemplateResend: React.FC<Props> = ({
    nombre, apellidos, email, telefono, residencia,
}) => (
    <Html>
        <Head />
        <Preview>
            Hemos recibido tu solicitud de contacto, a continuación compartimos los detalles:
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={"https://www.quintazur.com/assets/Nuevo_Logo_Quintazur_Azul-gwIc08WY.png"}
                    width="140"
                    alt="Quintazur Logo"
                    style={{
                        borderRadius: "5px",
                        padding: "10px",
                    }}
                />
                <Text style={title}>
                    <strong>Confirmación de Contacto</strong>
                </Text>

                <Section style={section}>
                    <Text style={text}>
                        ¡Hola <strong>{nombre}</strong>!
                    </Text>
                    <Text style={text}>
                        Hemos recibido tu solicitud de contacto, a continuación compartimos los
                        detalles:
                    </Text>


                    <Text style={text}>Nombre: {nombre}</Text>
                    <Text style={text}>Apellidos: {apellidos}</Text>
                    <Text style={text}>Email: {email}</Text>
                    <Text style={text}>Teléfono: {telefono}</Text>
                    <Text style={text}>Residencia: {residencia}</Text>

                    <Button href="https://www.quintazur.com/" style={button}>
                        Visitar Sitio
                    </Button>
                </Section>
                <Text style={links}>
                    <Link href={"https://www.quintazur.com/#contacto"} style={link}>
                        Contacto
                    </Link>{" "}
                    ・{" "}
                    <Link
                        href={"https://www.quintazur.com/aviso-de-privacidad"}
                        style={link}
                    >
                        Aviso de Privacidad
                    </Link>
                </Text>

                <Text style={footer}>Quintazur</Text>
            </Container>
        </Body>
    </Html>
);

export default EmailTemplateResend;




const main = {
    backgroundColor: "#ffffff",
    color: "#24292e",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "20px 0 48px",
};

const title = {
    fontSize: "24px",
    lineHeight: 1.25,
};

const section = {
    padding: "24px",
    border: "solid 1px #dedede",
    borderRadius: "5px",
    textAlign: "center" as const,
};

const text = {
    margin: "0 0 10px 0",
    textAlign: "left" as const,
};

const button = {
    fontSize: "14px",
    backgroundColor: "#0033A1",
    color: "#ffffff",
    borderRadius: "22px",
    padding: "16px 44px",
};

const links = {
    textAlign: "center" as const,
};

const link = {
    color: "#0366d6",
    fontSize: "12px",
};

const footer = {
    color: "#6a737d",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "60px",
};


module.exports = EmailTemplateResend;