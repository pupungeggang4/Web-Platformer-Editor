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

    icon: {
        deselect: new Image(),
        erase: new Image(),
        coin: new Image(),
    },

    sprite: {
        coin: new Image(),
        player: new Image(),
        goal: new Image(),
    },

    tileset: {
        plains: new Image()
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

    for (let i = 1; i < 20; i++) {
        img.icon[i] = new Image()
    }
    img.icon.deselect.src = 'Image/Icon/IconDeselect.png'
    img.icon.erase.src = 'Image/Icon/IconErase.png'
    img.icon[1].src = 'Image/Icon/IconCoin.png'

    img.icon.coin.src = 'Image/Icon/IconCoin.png'

    img.sprite.coin.src = 'Image/Sprite/SpriteGoldCoin.png'
    img.sprite.player.src = 'Image/Sprite/SpritePlayer.png'
    img.sprite.goal.src = 'Image/Sprite/SpriteGoal.png'

    img.tileset.plains.src = 'Image/Tileset/Plains.png'
}
