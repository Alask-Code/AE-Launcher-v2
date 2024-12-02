require('dotenv').config();
const { app } = require('electron');
try { require('electron-reload')('../src'); } catch (error) {}

app.commandLine.appendSwitch('ignore-certificate-errors');

app.whenReady().then(() => {
  const createWindow = require('./BrowserWindow');
  const win = createWindow();
  win.openDevTools();
});
