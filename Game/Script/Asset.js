let img = {
    button: {
        newFile: new Image(),
        saveFile: new Image(),
        openFile: new Image(),
    }
}

function imageLoad() {
    img.button.newFile.src = 'Image/ButtonNewFile.png'
    img.button.saveFile.src = 'Image/ButtonSaveFile.png'
    img.button.openFile.src = 'Image/ButtonOpenFile.png'
}
