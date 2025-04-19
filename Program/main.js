const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 800
    })

    win.loadFile('Program/index.html')
}

app.whenReady().then(() => {
    createWindow()
})