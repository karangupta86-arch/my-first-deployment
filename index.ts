import express = require('express');

const app = express();
const port = process.env.PORT || 3000;

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

app.get('/', (req, res) => {
  const user: Person = {
    name: "Karan",
    age: 25
  };
  
  res.send(`
    <html>
      <head><title>My First Deployment</title></head>
      <body>
        <h1>🚀 It's Live!</h1>
        <p>${greet(user)}</p>
        <p>This is running on Vercel, deployed from GitHub, built with TypeScript.</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;