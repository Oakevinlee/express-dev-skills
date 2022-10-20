const Skill = require('../models/skill');
// const { render } = require('../server');


module.exports = {
    index,
    show
};


function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'

    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Details'

    });
}

