class SceneEdit {
    static loop(program) {
        this.render(program)
    }

    static render(program) {
        Render.init(program.ctx)
        Render.renderUpperBar(program)
        Render.renderLowerBar(program)
        Render.renderLeftBar(program)
        Render.renderRightBar(program)

        program.fieldEdit.render(program)
    }

    static keyDown(program, key) {

    }

    static keyUp(program, key) {

    }

    static mouseUp(program, pos, button) {
        if (button === 0) {
            if (program.state === '') {
                if (pointInsideRectUI(pos, UI.edit.fieldArea)) {
                    let row = Math.floor((pos.x - UI.edit.fieldArea[0]) / 40)
                    let col = Math.floor((pos.y - UI.edit.fieldArea[1]) / 40)
                    console.log(row, col)
                }
            }
        }
    }
}
