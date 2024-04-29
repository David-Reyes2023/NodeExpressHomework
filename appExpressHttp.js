const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log('Llegó un GET');
    res.send(`
        <form method="POST">
            <input type="text" name="username"></input>
            <br>
            <br>
            <button type="submit">Crear Usuario</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    console.log('Llegó un POST');
    const userName = req.body.username;
    res.send(`<h1>${userName}</h1>`);
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});