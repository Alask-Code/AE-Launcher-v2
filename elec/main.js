const { app, BrowserWindow } = require('electron');
try { require('electron-reload')('../**/*.html'); } catch (error) {}

function createWindow () {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    title: 'My App'
  });

  win.removeMenu();
  win.loadFile('index.html');
  win.openDevTools();
}
app.commandLine.appendSwitch('ignore-certificate-errors');
app.whenReady().then(createWindow);
