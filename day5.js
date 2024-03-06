// JSON resume data (replace with your actual data)
const resumeData = {
    "firstName": "Arvind",
    "lastName": "Kumar",
    "contactInformation": {
      "email": "arvindbala101@gmail.com"
    },
    "summary": "Full Stack Developer Fresher with MERN Stack skills",
    "projects": [
      {
        "title": "Project 1",
        "description": "Brief description of  first project here."
      },
      
    ],
    "skills": {
      "frontend": ["HTML", "CSS", "JavaScript", "React.js"],
      "backend": ["Node.js", "Express.js"],
      "database": ["MongoDB"]
    },
    "education": [
      {
        "institution": "SRM University",
        "degree": "B.E."
      },
      {
        "institution": "SRM University",
        "degree": "MBA"
      }
    ]
  };
  
  // Functions to iterate over skills using different for loops
  function iterateSkillsForLoop() {
    for (let i = 0; i < resumeData.skills.frontend.length; i++) {
      console.log("Frontend Skill:", resumeData.skills.frontend[i]);
    }
    for (let i = 0; i < resumeData.skills.backend.length; i++) {
      console.log("Backend Skill:", resumeData.skills.backend[i]);
    }
    for (let i = 0; i < resumeData.skills.database.length; i++) {
      console.log("Database Skill:", resumeData.skills.database[i]);
    }
  }
  
  function iterateSkillsForIn() {
    for (const category in resumeData.skills) {
      if (resumeData.skills.hasOwnProperty(category)) {
        console.log(`Skills in ${category}:`);
        for (const skill of resumeData.skills[category]) {
          console.log("-", skill);
        }
      }
    }
  }
  
  function iterateSkillsForOf() {
    for (const category of Object.keys(resumeData.skills)) {
      console.log(`Skills in ${category}:`);
      for (const skill of resumeData.skills[category]) {
        console.log("-", skill);
      }
    }
  }
  
  function iterateSkillsForEach() {
    Object.entries(resumeData.skills).forEach(([category, skills]) => {
      console.log(`Skills in ${category}:`);
      skills.forEach(skill => console.log("-", skill));
    });
  }
  
  // Call the functions to iterate over skills
  iterateSkillsForLoop();
  iterateSkillsForIn();
  iterateSkillsForOf();
  iterateSkillsForEach();
  