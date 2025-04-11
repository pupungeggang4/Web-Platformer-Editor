class SceneEditor {
    static loop(game) {
        Render.init(game)
        game.ctx.strokeRect(0, 0, 20, 20)
    }

    static mouseUp(game, pos, button) {
        console.log(pos.x, pos.y)
    }
}
