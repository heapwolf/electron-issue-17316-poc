const electron = require('electron')

const {
  app,
  BrowserWindow
} = electron

let mainWindow = null

app.on('ready', () => {
  const windowOptions = {
    webPreferences: {
      nodeIntegration: false,
      //
      // "The context that the preload script runs in will still
      // have full access to the document and window globals".
      //
      // However, window.customElements is null. When the
      // contextIsolation property is set to false, it is defined.
      //
      contextIsolation: true,
      preload: `${__dirname}/preload.js`
    }
  }

  mainWindow = new BrowserWindow(windowOptions)

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools({ mode: 'detach' })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})
