let db = require('./db');

module.exports = {
    handleSignup: (email, password) => {
        // Check if email already exists
        // Save user data
        db.saveUser({email, password})

        // Send welcome email
    }
}