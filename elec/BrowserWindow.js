const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 700,
    height: 375,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.removeMenu();
  win.loadFile('src/index.html');
  return win;
}

module.exports = createWindow;
