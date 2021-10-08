// Create database
var mongoose = require("mongoose");
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

// connect....
mongoose.connect(
    process.env.MONGO_URL || "mongodb+srv://eranlipi:$Eran0517@cluster0.f8bar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    options,
    function (err) {
        // Check error in initial connection. There is no 2nd param to the callback.
        if (err) {
            console.log("Failed to connect to DB");
            process.exit(1);
        } else {
            console.log("DB connected.");
        }
    }
);

//import models.
require("./book.js");
require("./author.js");
