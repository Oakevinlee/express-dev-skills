const skills = [
    {id: 125223, skill: 'JavaScript', insaneSkill: true},
    {id: 127904, skill: 'Node', insaneSkill: false},
    {id: 139608, skill: 'REGIX', insaneSkill: false}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;   
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.insaneSkill =false;
    skills.push(skill);

}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill=> skill.id === id);
    skills.splice(idx, 1);
  
}
