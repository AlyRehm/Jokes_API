const Joke = require("../models/jokes.model");


//FIND ALL
const getAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json(allJokes))
    .catch((err) => console.log(err));
};


//GET ONE BY ID 
const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
      .then((joke) => res.json(joke))
      .catch((err) => console.log(err));
};

// ANOTHER WAY TO WRITE THE ABOVE PER CLASS. Can do this and then you do not need to export each piece like on line 55 
// module.exports.findOneJoke = (req,res) =>{
//   Joke.findOne({_id: req.params.id})
//     .then((oneJoke) => res.json(oneJoke))
//     .catch((err) => req.json({message: "Something went wrong", error:err}));
// }


//CREATE 
const createJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
      .then((newJoke) => res.json(newJoke))
      .catch((err) => console.log(err));
};

// module.exports.createJoke = (req, res) => {
//   Joke.create(req.body)
//     .then{(newJoke) => res.json(newJoke)}
//     .catch((err) res.jsoin({message: "Something ewent wrong", error:err}));
// }


//UPDATE 
const updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedJoke) => res.json(updatedJoke))
      .catch((err) => console.log(err));
};


//DELETE
    const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then((result) => res.json(result))
        .catch((err) => console.log(err));
    };

module.exports = {
    getAllJokes,
    getJokeById,
    createJoke,
    updateJoke,
    deleteJoke,
};