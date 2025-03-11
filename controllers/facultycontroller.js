const Faculty = require('../models/faculty');
const axios = require('axios');

// Create a new faculty profile
exports.createProfile = async (req, res) => {
    try {
        const faculty = await Faculty.create(req.body);
        res.status(201).json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all faculty profiles
exports.getAllProfiles = async (req, res) => {
    try {
        const faculties = await Faculty.findAll();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update faculty profile
exports.updateProfile = async (req, res) => {
    try {
        const faculty = await Faculty.findByPk(req.params.id);
        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
        
        await faculty.update(req.body);
        res.status(200).json(faculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete faculty profile
exports.deleteProfile = async (req, res) => {
    try {
        const faculty = await Faculty.findByPk(req.params.id);
        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });
        
        await faculty.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch data from Google Scholar, Scopus, and ResearchGate
exports.updateFromExternalSources = async (req, res) => {
    const { googleScholarId, scopusId, researchGateId } = req.body;

    try {
        const faculty = await Faculty.findOne({ where: { id: req.params.id } });
        if (!faculty) return res.status(404).json({ error: 'Faculty not found' });

        // Fetch data from Google Scholar
        if (googleScholarId) {
            const googleScholarData = await fetchGoogleScholarData(googleScholarId);
            faculty.publications = googleScholarData.publications;
            faculty.achievements = googleScholarData.achievements;
        }

        // Fetch data from Scopus
        if (scopusId) {
            const scopusData = await fetchScopusData(scopusId);
            faculty.publications = { ...faculty.publications, ...scopusData.publications };
            faculty.achievements = { ...faculty.achievements, ...scopusData.achievements };
        }

        // Fetch data from ResearchGate
        if (researchGateId) {
            const researchGateData = await fetchResearchGateData(researchGateId);
            faculty.publications = { ...faculty.publications, ...researchGateData.publications };
            faculty.achievements = { ...faculty.achievements, ...researchGateData.achievements };
        }

        await faculty.save();
        res.status(200).json
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
} 
    