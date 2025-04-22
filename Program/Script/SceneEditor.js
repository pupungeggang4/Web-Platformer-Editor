class SceneEdit {
    static loop(program) {
        this.render(program)
    }

    static render(program) {
        Render.init(program)
        Render.renderUpperBar(program)
        Render.renderLowerBar(program)
        Render.renderLeftBar(program)
        Render.renderRightBar(program)
    }

    static keyDown(program, key) {

    }

    static keyUp(program, key) {

    }

    static mouseUp(program, pos, button) {

    }
}
