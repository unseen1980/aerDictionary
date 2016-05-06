var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require("electron").ipcMain;
require('electron-reload')(__dirname);

app.on('ready', function () {
    var mainWindow = new BrowserWindow({
        width: 640,
        height: 480
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    var editWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        show: false       
    });
    editWindow.setMenu(null);
    editWindow.loadURL('file://' + __dirname + '/edit.html');    
    //editWindow.openDevTools();

    ipc.on('open-dictionary', function (event, arg) {
        editWindow.show();
        editWindow.webContents.send('open-dictionary', arg);
    });
});