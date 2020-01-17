const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: { type: String, required: true, default: 'Project Title!'},
    projectDescription: { type: String, default: 'Project Description!!'},
    assigne: { type: String },
    createdOn: Date 
});

module.exports = mongoose.model('Project', projectSchema);