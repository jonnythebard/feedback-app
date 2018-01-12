const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/userModel");
require("./services/passport");
const app = express();

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30days, 24hours, 60mins, 60secs, 1000msecs
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);