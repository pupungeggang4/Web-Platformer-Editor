class SceneTest {
    static loop(program) {
        if (program.state === 'play') {
            program.fieldTest.handleTick(program)
        }
        this.render(program, program.fieldTest.player)
    }

    static render(program, player) {
        Render.init(program.ctx)
        program.fieldTest.render(program)
        Render.drawImageUI(program.ctx, img.button.play, UI.test.buttonPlay)
        Render.drawImageUI(program.ctx, img.button.pause, UI.test.buttonPause)
        Render.drawImageUI(program.ctx, img.button.stop, UI.test.buttonStop)

        program.ctx.fillStyle = 'white'
        Render.fillRectUI(program.ctx, UI.test.lowerRect)
        Render.strokeRectUI(program.ctx, UI.test.lowerRect)
        program.ctx.fillStyle = 'black'
        Render.drawImageUI(program.ctx, img.icon.coin, UI.test.iconCoin)
        Render.fillTextUI(program.ctx, `${player.coin}`, UI.test.textCoin)
    }

    static mouseUp(program, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.test.buttonPlay)) {
                if (program.state === 'win') {
                    program.fieldTest.loadField(program.fieldEdit)
                }
                program.state = 'play'
            } else if (pointInsideRectUI(pos, UI.test.buttonPause)) {
                program.state = 'pause'
            } else if (pointInsideRectUI(pos, UI.test.buttonStop)) {
                program.scene = 'editor'
                program.state = ''
            }
        }
    }

    static keyDown(program, key) {

    }

    static keyUp(program, key) {
        if (key === 's') {
            program.scene = 'editor'
            program.state = ''
        }
    }
}
