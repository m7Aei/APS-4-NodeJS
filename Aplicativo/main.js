const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Cria uma janela de navegação.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html');
}

app.on('ready', createWindow);
