const express = require("express");
const userRoute = require("./routes/userRoute")
const profileViewRoute = require("./routes/profileViewRoute")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())




app.use("/user" , userRoute)
app.use("/profile-views", profileViewRoute)


app.listen(5000 || process.env.PORT)