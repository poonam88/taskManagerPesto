const app = require('./app');

//const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 3000; // Change 3000 to any other available port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



