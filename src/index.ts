import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello this is TS Docker message");
    console.log("Response sent!");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running! Accept traffic on http://localhost:${port}`);
});