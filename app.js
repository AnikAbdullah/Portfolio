import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index.ejs');
});

app.get("/contact", (req, res) => {
    res.render('contact.ejs');
});

app.get("/portfolio", (req, res) => {
    res.render('portfolio.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
