const { app, BrowserWindow, ipcMain, shell } = require('electron');

const path = require('path');
const os = require('os');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 950,
    height: 700,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
  });

  // Set icon for the taskbar
  // mainWindow.setIcon(`${__dirname}/assets/img/logo.png`);

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000');
  // mainWindow.loadURL(`file://${path.join(__dirname, `/../build/index.html`)}`);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


const closeMainWindow = () => {
  mainWindow.close();
};

const minimizeMainWindow = () => {
  mainWindow.minimize();
};

const restoreMainWindow = () => {
  mainWindow.restore();
};

const maximizeMainWindow = () => {
    mainWindow.maximize();
};

const isMainWindowMaximized = () => {
  return mainWindow.isMaximized();
}

const maximizeRestoreMainWindow = () => {
  if(isMainWindowMaximized()) {
    restoreMainWindow();
  }
  else {
    maximizeMainWindow();
  }
};

const getHostName = () => {
  return os.hostname();
}

const openExternalUrl = (event, url) => {
  shell.openExternal(url);
}

ipcMain.on('closeMainWindow', closeMainWindow);
ipcMain.on('minimizeMainWindow', minimizeMainWindow);
ipcMain.on('maximizeRestoreMainWindow', maximizeRestoreMainWindow);
ipcMain.on('openExternalUrl', openExternalUrl);

ipcMain.handle('getHostName', getHostName);
