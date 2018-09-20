const express = require('express')
const path = require('path')

const app = express()

// Configs
const serverConfig = {
    rootDir: '/public',
    defaultPage: 'index.html',
    port: process.env.PORT || 8000
};

app.use(express.static(__dirname + serverConfig.rootDir));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + serverConfig.rootDir,  
                            serverConfig.defaultPage));
});

app.listen(serverConfig.port, () => {
    console.log(`Express server is listening on port ${serverConfig.port}!`);
    console.log(`View your localhost at\x1b[36m http://localhost:${serverConfig.port}\x1b[0m`)
});