class SceneEditor {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game)
        game.editor.render(game)
        Render.renderUpperBar(game)
        Render.renderLeftBar(game)
        Render.renderRightBar(game)
        Render.renderLowerBar(game)
    }

    static mouseUp(game, pos, button) {
        console.log(pos.x, pos.y)
    }
}
