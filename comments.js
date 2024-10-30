// Import the http module
const http = require('http');

// Define the server port
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send response text
    res.end('Hello, World!');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
