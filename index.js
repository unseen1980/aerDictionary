var app = require('app');
var BrowserWindow = require('browser-window');
require('electron-reload')(__dirname);

app.on('ready', function () {
    var mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/index.html');
});