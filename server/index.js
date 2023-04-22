const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "build")));
//Have Node serve the files for our built React app
// app.use(
//   express.static(path.resolve(__dirname, "../Zahnspange-charlottenburg/build"))
// );
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
); // inside it we can put our ip address or domain name

app.get("/api", function (req, res) {
  // res.sendFile(path.join(__dirname, "zahnspange", "index.html"));
  res.send("Here is the Api server");
  console.log("server is up and running on port 8800");
});

app.post("/contact", async (req, res) => {
  let data = req.body.data;
  let { title, name, phone, message, email } = data;
  console.log(data.name);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yano.sabbagh27@gmail.com", // generated ethereal user
      pass: "tletytxdfjzrfwgq", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Zahnspange-charlottenburg" <Zahnspange-Charlottenburg>', // sender address
    to: "info@zahnspange-charlottenburg.de , yanal.o.sabbagh@gmail.com", // list of receivers
    subject: email, // Subject line
    text: `
Sender: ${title} ${name}
phone: ${phone}
Message:${message}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  res.send(JSON.stringify(data));
});

app.listen(8800);
