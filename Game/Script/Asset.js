let img = {
    button: {
        newFile: new Image(),
        saveFile: new Image(),
        openFile: new Image(),

        tile: new Image(),
        thing: new Image(),

        start: new Image(),
        goal: new Image(),

        play: new Image(),
        pause: new Image(),
        stop: new Image(),
    },

    thing: {
        start: new Image(),
        goal: new Image(),
    }
}

function imageLoad() {
    img.button.newFile.src = 'Image/ButtonNewFile.png'
    img.button.saveFile.src = 'Image/ButtonSaveFile.png'
    img.button.openFile.src = 'Image/ButtonOpenFile.png'

    img.button.tile.src = 'Image/ButtonTile.png'
    img.button.thing.src = 'Image/ButtonThing.png'

    img.button.start.src = 'Image/ButtonStart.png'
    img.button.goal.src = 'Image/ButtonGoal.png'

    img.button.play.src = 'Image/ButtonPlay.png'
    img.button.pause.src = 'Image/ButtonPause.png'
    img.button.stop.src = 'Image/ButtonStop.png'

    img.thing.start.src = 'Image/Thing/Start.png'
    img.thing.goal.src = 'Image/Thing/Goal.png'
}
