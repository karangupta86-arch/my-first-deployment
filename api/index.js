module.exports = (req, res) => {
  res.status(200).send(`
    <html>
      <head><title>My First Deployment</title></head>
      <body>
        <h1>🚀 It's Live!</h1>
        <p>Hello, Karan! You are 25 years old.</p>
        <p>This is running on Vercel as a serverless function.</p>
        <p><strong>Local Code → Git → GitHub → Vercel → LIVE!</strong></p>
      </body>
    </html>
  `);
};