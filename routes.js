const Control = require('./controllers.js');

module.exports = (app) => {

    app.get('/api/exercise/log', Control.getExercises);
    app.post('/api/exercise/new-user', Control.newUser);
    app.post('/api/exercise/add', Control.newExercise);
   
}