let img = {
    button: {
        newFile: new Image(),
        saveFile: new Image(),
        openFile: new Image(),

        tile: new Image(),
        thing: new Image(),
        start: new Image(),
        goal: new Image(),
        camera: new Image(),

        play: new Image(),
        stop: new Image(),
        pause: new Image(),
    },

    sprite: {
        coin: new Image(),
    }
}

function imageLoad() {
    img.button.newFile.src = 'Image/Button/ButtonNew.png'
    img.button.openFile.src = 'Image/Button/ButtonOpen.png'
    img.button.saveFile.src = 'Image/Button/ButtonSave.png'

    img.button.tile.src = 'Image/Button/ButtonTile.png'
    img.button.thing.src = 'Image/Button/ButtonThing.png'
    img.button.start.src = 'Image/Button/ButtonStart.png'
    img.button.goal.src = 'Image/Button/ButtonGoal.png'
    img.button.camera.src = 'Image/Button/ButtonCamera.png'

    img.button.play.src = 'Image/Button/ButtonPlay.png'
    img.button.stop.src = 'Image/Button/ButtonStop.png'
    img.button.pause.src = 'Image/Button/ButtonPause.png'

    img.sprite.coin.src = 'Image/Sprite/SpriteGoldCoin.png'
}
