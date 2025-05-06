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
                    program.fieldTest.loadField(program.fieldEdit)
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
                    this.handleEditTile(program, pos)
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

    static handleEditTile(program, pos) {
        
    }

    static handleEditThing(program, pos) {
        if (pointInsideRectUI(pos, UI.edit.left.selectArea)) {
            let col = Math.floor((pos.x - UI.edit.left.selectArea[0]) / UI.edit.buttonSize[0])
            let row = Math.floor((pos.y - UI.edit.left.selectArea[1]) / UI.edit.buttonSize[1])
            program.brush = row * 3 + col - 1
            console.log(program.brush)
        }

        if (pointInsideRectUI(pos, UI.edit.fieldArea)) {
            let col = Math.floor((pos.x + program.fieldEdit.camera.x - UI.edit.fieldArea[0]) / 40)
            let row = Math.floor((pos.y + program.fieldEdit.camera.y - UI.edit.fieldArea[1]) / 40)
            if (program.brush === 0) {
                let temp = new Empty()
                temp.placeTileMap(program.fieldEdit.tileMap, row, col)
            } else if (program.brush === 1) {
                let temp = new Coin()
                temp.placeTileMap(program.fieldEdit.tileMap, row, col)
            }
        }
    }

    static handleEditStart(program, pos) {
        if (pointInsideRectUI(pos, UI.edit.fieldArea)) {
            let col = Math.floor((pos.x + program.fieldEdit.camera.x - UI.edit.fieldArea[0]) / 40)
            let row = Math.floor((pos.y + program.fieldEdit.camera.y - UI.edit.fieldArea[1]) / 40)
            program.fieldEdit.player.rect.position = new Vector2D(col * 40 + 20, row * 40 + 20)
        }
    }

    static handleEditGoal(program, pos) {

    }

    static handleEditCamera(program, pos) {

    }
}
