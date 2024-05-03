import express from "express";
import hallRouter from "./Routers/hallBooking.Router.js";

const app = express();
const PORT = 7777;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hallbooking App</title>
    </head>
    <body >

    <div style="text-align: center; color:white; background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); border-radius: 20px;  padding: 10px;"><h1>Hall Booking API</h1></div>
    <div>
    <ul>
    <li>
    <h2> Get the All Room Details</h2>
    <h3><code >GET:</code> <code >https://hallbooking-ss.onrender.com/hallapi/roominfo</code></h3>
    </li>

    <li>
    <h2>Create a New Room</h2>
    <h3><code >POST:</code> <code >https://hallbooking-ss.onrender.com/hallapi/createroom</code></h3>
    </li>

    <li>
    <h2>Book New Room</h2>
    <h3><code >POST:</code><code >https://hallbooking-ss.onrender.com/hallapi/bookroom</code></h3>
    </li>

    <li>
    <h2>Retrieve all the Booked Room Data</h2>
    <h3><code >GET:</code><code >https://hallbooking-ss.onrender.com/hallapi/bookedroomdata</code> </h3>
    </li>

    <li>
    <h2>Retrieve all the Customers Booked Room Data</h2>
    <h3><code>GET:</code> <code >https://hallbooking-ss.onrender.com/hallapi/customersbookeddata</code> </h3>
    </li>

    <li>
    <h2>Retrieve Booking Counts and Room Data for Booked Customers</h2>
    <h3><code >GET:</code> <code >https://hallbooking-ss.onrender.com/hallapi/customerbookingcount</code> </h3>
    </li>
    

    </ul> 
    </div>
  Documentation : <button><a style="text-decoration:none; color:#3c4043" target="_blank" href="https://github.com/GokulRSG/Day-38/blob/main/Readme.md">Read More</a></button>
    </body>
    </html>

    `);
});
app.use("/hallapi", hallRouter);

app.listen(PORT, () => {
  console.log(`App Listening in ${PORT}`);
});
