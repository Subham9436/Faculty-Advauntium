const express = require('express');
const FacultyController = require('../controllers/facultycontroller'); // Ensure this path is correct

const router = express.Router();

// Create a new faculty profile
router.post('/', FacultyController.createProfile);

// Get all faculty profiles
router.get('/', FacultyController.getAllProfiles);

// Update faculty profile
router.put('/:id', FacultyController.updateProfile);

// Delete faculty profile
router.delete('/:id', FacultyController.deleteProfile);

// Update from external sources
router.put('/update/:id', FacultyController.updateFromExternalSources);

module.exports = router;