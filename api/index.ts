import type { VercelRequest, VercelResponse } from '@vercel/node';

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const user: Person = {
    name: "Karan",
    age: 25
  };
  
  res.status(200).send(`
    <html>
      <head><title>My First Deployment</title></head>
      <body>
        <h1>🚀 It's Live!</h1>
        <p>${greet(user)}</p>
        <p>This is running on Vercel, deployed from GitHub, built with TypeScript.</p>
        <p><strong>Your code went from VS Code → Git → GitHub → Vercel → LIVE!</strong></p>
      </body>
    </html>
  `);
}