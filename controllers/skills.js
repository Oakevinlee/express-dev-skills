const Skill = require('../models/skill');
// const { render } = require('../server');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOne
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

function newSkill(req, res) { 
    res.render('skills/new', {title: 'new skill'});
}

function create (req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteOne(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}