module.exports = (app) => {
    const commons = require('../controllers/common.controller.js');

    // Create a new User
    app.post('/login', commons.login);

    // // Retrieve all Users
    // app.get('/users', users.findAll);

    // // Retrieve a single Note with userId
    // app.get('/users/:userId', users.findOne);

    // // Update a Note with userId
    // app.put('/users/:userId', users.update);

    // // Delete a Note with userId
    // app.delete('/users/:userId', users.delete);
}