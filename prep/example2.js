function capitaliseFirstLetter(name) {
  const capitalName = name[0].toUpperCase() + name.substring(1);
  return capitalName;
}

function createGreeting(name) {
  const result = capitaliseFirstLetter(name);
  return `Welcome ${result}`;
}

const greeting = createGreeting("barath");
console.log(greeting);