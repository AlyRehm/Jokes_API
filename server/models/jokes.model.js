const mongoose  = require("mongoose");

//added in validations 
const JokeSchema =  new mongoose.Schema ({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be atleast 10 characters long"] 
    },
    punchline: {
        type:String,
        required: [true, "The punchline is required"],
        minLength:[3, "The punchline must be atleast 3 chacters long"]
    },
    },{timestamps: true}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;