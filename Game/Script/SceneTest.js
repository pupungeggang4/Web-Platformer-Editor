class SceneTest {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game)
        Render.drawImageUI(game, img.button.play, UI.test.buttonPlay)
        Render.drawImageUI(game, img.button.pause, UI.test.buttonPause)
        Render.drawImageUI(game, img.button.stop, UI.test.buttonStop)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.test.buttonStop)) {
                game.scene = 'editor'
                game.state = ''
            }

            if (game.state === '') {

            }
        }
    }
}
