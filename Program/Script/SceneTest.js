class SceneTest {
    static loop(program) {
        this.render(program)
    }

    static render(program) {
        Render.init(program.ctx)
        Render.drawImageUI(program.ctx, img.button.play, UI.test.buttonPlay)
        Render.drawImageUI(program.ctx, img.button.pause, UI.test.buttonPause)
        Render.drawImageUI(program.ctx, img.button.stop, UI.test.buttonStop)
    }

    static mouseUp(program, pos, button) {

    }

    static keyDown(program, key) {

    }

    static keyUp(program, key) {
        if (key === 's') {
            program.scene = 'editor'
        }
    }
}
