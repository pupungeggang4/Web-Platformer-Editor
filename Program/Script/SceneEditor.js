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
        if (program.state === '') {
            if (key === 'p') {
                program.scene = 'test'
                program.state = 'play'
            }
        }
    }

    static mouseUp(program, pos, button) {
        if (button === 0) {
            if (program.state === '') {
                if (pointInsideRectUI(pos, UI.edit.fieldArea)) {
                    let row = Math.floor((pos.x + program.fieldEdit.camera.x - UI.edit.fieldArea[0]) / 40)
                    let col = Math.floor((pos.y + program.fieldEdit.camera.y - UI.edit.fieldArea[1]) / 40)
                    console.log(row, col)
                }

                if (pointInsideRectUI(pos, UI.edit.upper.buttonPlay)) {
                    program.scene = 'test'
                    program.state = 'play'
                }

                if (pointInsideRectUI(pos, UI.edit.upper.buttonTile)) {
                    program.editState = 'tile'
                } else if (pointInsideRectUI(pos, UI.edit.upper.buttonThing)) {
                    program.editState = 'thing'
                } else if (pointInsideRectUI(pos, UI.edit.upper.buttonStart)) {
                    program.editState = 'start'
                } else if (pointInsideRectUI(pos, UI.edit.upper.buttonGoal)) {
                    program.editState = 'goal'
                } else if (pointInsideRectUI(pos, UI.edit.upper.buttonCamera)) {
                    program.editState = 'camera'
                }

                if (program.editState === 'tile') {
                    this.handleEditTitle(program, pos)
                } else if (program.editState === 'thing') {
                    this.handleEditThing(program, pos)
                } else if (program.editState === 'start') {
                    this.handleEditStart(program, pos)
                } else if (program.editState === 'goal') {
                    this.handleEditGoal(program, pos)
                } else if (program.editState === 'camera') {
                    this.handleEditCamera(program, pos)
                }
            }
        }
    }

    static handleEditTitle(program, pos) {
        
    }

    static handleEditThing(program, pos) {

    }

    static handleEditStart(program, pos) {

    }

    static handleEditGoal(program, pos) {

    }

    static handleEditCamera(program, pos) {

    }
}
