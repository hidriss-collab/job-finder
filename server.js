const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static("."));

app.get("/api/jobs", async (req, res) => {
    try{
        const query = req.query.query || "software engineering";
        const location = req.query.location || "kigali";

        const url = `https://jsearch.p.rapidapi.com/search-v2?query=${encodeURIComponent(`${query} in ${location}`)}&page=1&num_pages=1&country=rw&language=en&date_posted=all`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
                "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.message || "Unable to retrieve jobs."
            });
        }

        res.json(data);

    } catch (error) {
        console.error("API ERROR:", error);

        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Job Finder server running at http://localhost:${PORT}`);
});