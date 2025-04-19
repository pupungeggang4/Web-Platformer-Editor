const { app, BrowserWindow } = require('electron')
var path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        icon: path.join(__dirname, 'favicon.ico')
    })

    win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
    createWindow()
})