// app.js

const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`
        <h1>Azure App Service Deployment Successful 🚀</h1>
        <p>Node.js Version 20 App Running Successfully</p>
        <p>Hosted on Azure App Service</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        app: "azure-node-demo",
        nodeVersion: process.version
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});