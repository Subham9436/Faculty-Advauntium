const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models'); // Import the sequelize instance
const facultyRoutes = require('./routes/facultyRoutes'); // Import faculty routes

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Connect to the database
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Routes
app.use('/api/faculty', facultyRoutes); // Use faculty routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});