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
                if (pointInsideRectUI(pos, UI.editor.upper.buttonPlay)) {
                    game.scene = 'test'
                    game.state = ''
                    game.testField.loadField(game.field)
                }
            }
        }
    }
}
