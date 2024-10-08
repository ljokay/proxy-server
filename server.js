// Import cors-anywhere
const corsAnywhere = require('cors-anywhere');

// Define the host and port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;

// Create the proxy server
corsAnywhere.createServer({
    originWhitelist: [],  // Allow all origins (whitelist empty means all origins are allowed)
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
});