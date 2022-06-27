const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  closeMainWindow: () => ipcRenderer.send('closeMainWindow'),
  minimizeMainWindow: () => ipcRenderer.send('minimizeMainWindow'),
  maximizeMainWindow: () => ipcRenderer.send('maximizeRestoreMainWindow'),
  getHostName: () => ipcRenderer.invoke('getHostName'),
  openExternalUrl: (url) => ipcRenderer.send('openExternalUrl', url)
});
