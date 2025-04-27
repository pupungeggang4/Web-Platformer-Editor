class SceneTest {
    static loop(program) {
        this.render(program)
    }

    static render(program) {
        Render.init(program.ctx)
    }
}
