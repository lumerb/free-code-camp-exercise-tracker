const Exercise = require('./model.js');

exports.newUser = (req, res) => {
    const username = req.body.username;
    const User = new Exercise({
        userId: username,
        username: username,
        exercises: []
    })
    User.save()
        .then(data => {

            res.send(data)
        }).catch(err => {
            if (err.code == 11000) {
                res.send({
                    error: err.errmsg
                })
            }
            console.log(err)
        })
}

exports.newExercise = (req, res) => {

    const exercise = {
        description: req.body.description,
        duration: parseInt(req.body.duration),
        date: new Date(req.body.date)
    }

    Exercise.findOneAndUpdate({
        userId: req.body.username
    }, {
        $push: {
            exercises: exercise
        }
    },{new:true}).then(data => {
        res.send(data)
    }).catch(err => res.send(err))
}

exports.getExercises = (req, res) => {

    const username = req.query.username;
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);
    const limit = req.query.limit;

    if (from == undefined || to == undefined || limit == undefined) {
        Exercise.find({
            username: username
        }).limit(Number(limit)).then(data => {
            res.send(data[0].exercises)
        }).catch(err => res.send(err));
    } else {
        Exercise.find({
            username: username
        }).limit(Number(limit)).then(data => {
            res.send(data[0].exercises)
        }).catch(err => res.send(err));
    }


}