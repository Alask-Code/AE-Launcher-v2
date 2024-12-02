const { BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 275,
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
