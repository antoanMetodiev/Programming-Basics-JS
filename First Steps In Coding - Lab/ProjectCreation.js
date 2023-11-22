function ProjectCreation(input) {
   let name = input[0];
   let projectsCount = input[1];
   let result = projectsCount * 3;
   console.log(`The architect ${name} will need ${result} hours to complete ${projectsCount} project/s.`);
}

ProjectCreation(["George ","4"]);