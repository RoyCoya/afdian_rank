const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
    createWindow()
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('templates/index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})