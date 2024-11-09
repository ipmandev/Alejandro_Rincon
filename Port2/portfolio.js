// Listado de Soft Skills
const softSkills = [
    "Comunicación efectiva",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Pensamiento crítico",
    "Resolución de problemas"
  ];
  
  // Listado de Hard Skills
  const hardSkills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git & GitHub"
  ];
  
  // Función para renderizar listas de habilidades
  function renderSkills() {
    const softSkillsList = document.getElementById('soft-skills-list');
    const hardSkillsList = document.getElementById('hard-skills-list');
  
    softSkills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      softSkillsList.appendChild(li);
    });
  
    hardSkills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      hardSkillsList.appendChild(li);
    });
  }
  
  // Llamar la función para mostrar las habilidades
  renderSkills();
  