interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const user: Person = {
  name: "Your Name",
  age: 25
};

console.log(greet(user));