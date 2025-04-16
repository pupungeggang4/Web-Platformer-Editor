class SceneEditor {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game)
        game.field.render(game)
        Render.renderUpperBar(game)
        Render.renderLeftBar(game)
        Render.renderRightBar(game)
        Render.renderLowerBar(game)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.state === '') {
                this.handleUpperBar(game, pos)

                if (game.mode === 'start') {
                    this.changeStartPosition(game.field, pos)
                } else if (game.mode === 'goal') {
                    this.changeGoalPosition(game.field, pos)
                }
            }
        }
    }

    static handleUpperBar(game, pos) {
        if (pointInsideRectUI(pos, UI.editor.upper.buttonTile)) {
            game.mode = 'tile'
        } else if (pointInsideRectUI(pos, UI.editor.upper.buttonThing)) {
            game.mode = 'thing'
        } else if (pointInsideRectUI(pos, UI.editor.upper.buttonStart)) {
            game.mode = 'start'
        } else if (pointInsideRectUI(pos, UI.editor.upper.buttonGoal)) {
            game.mode = 'goal'
        } else if (pointInsideRectUI(pos, UI.editor.upper.buttonPlay)) {
            game.scene = 'test'
            game.state = ''
            game.testField.loadField(game.field)
        }
    }

    static changeStartPosition(field, pos) {
        if (pointInsideRectUI(pos, UI.editor.gameArea)) {
            let clickedPos = new Vector2D(pos.x + field.camera.rect.position.x - 640, pos.y + field.camera.rect.position.y - 400)
            console.log(clickedPos)
            field.start.rect.position = clickedPos
        }
    }

    static changeGoalPosition(field, pos) {
        if (pointInsideRectUI(pos, UI.editor.gameArea)) {
            let clickedPos = new Vector2D(pos.x + field.camera.rect.position.x - 640, pos.y + field.camera.rect.position.y - 400)
            console.log(clickedPos)
            field.goal.rect.position = clickedPos
        }
    }
}
