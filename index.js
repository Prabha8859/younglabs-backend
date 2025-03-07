const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow all origins
app.use(cors({
    origin: "*",  // Allow any frontend to access
    methods: "GET",
    allowedHeaders: "Content-Type"
}));

app.get("/api/greet", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
