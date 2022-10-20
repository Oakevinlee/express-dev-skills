const Skill = require('../models/skill');
// const { render } = require('../server');


module.exports = {
    index
};


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'

    });
};

