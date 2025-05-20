import app from "./src/app";

const port = process.env.PORT;

app.listen(port || 3000, () => {
  console.log("Backend Server is running!");
});

