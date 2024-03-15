const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/name", (req, res) => {
  const personName = "Iron man";
  res.send(personName);
});

app.get("/api/team", (req, res) => {
  const team = "The Avengers";
  res.send(team);
});

app.get("/api/phone", (req, res) => {
  const phone = 996788549;
  res.send(phone.toString());
});

app.get("/api/email", (req, res) => {
  const email = "ironman@gmail.com";
  res.send(email);
});

app.get("/api/array", (req, res) => {
  const strings = ["Superhero", "The Avengers"];

  const randomNumbers = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 101)
  );

  const array = [...strings, ...randomNumbers];
  res.send(array);
});

app.get("/api/object", (req, res) => {
  const object = {
    phone: 996788549,
    email: "ironman@gmail.com",
    facebook: "www.facebook.com/ironman",
    instagram: "@ironman",
    address: "10880 Malibu Point, 90265",
  };
  res.send(object);
});

app.get("/api/randomNumbers", (req, res) => {
  const getRandomNumber = () => Math.floor(Math.random() * 101);
  const getRandomLength = () => Math.floor(Math.random() * 10) + 1;

  const randomNumbers = Array.from(
    { length: getRandomLength() },
    getRandomNumber
  );

  res.send(randomNumbers);
});

PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
