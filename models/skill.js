const skills = [
    {id: 125223, skill: 'JavaScript', insaneSkill: true},
    {id: 127904, skill: 'Node', insaneSkill: false},
    {id: 139608, skill: 'REGIX', insaneSkill: false}
  ];
  
module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;   
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}