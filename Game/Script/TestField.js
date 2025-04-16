class TestField {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 800
        this.ctx = this.canvas.getContext('2d')
        this.player = new Player()
        this.goal = new Goal()
        this.camera = new Camera2D()
        this.camera.rect.size = new Vector2D(1280, 800)
    }

    loadField(field) {
        this.camera.rect.position = new Vector2D(field.camera.rect.position.x, field.camera.rect.position.y)
        this.player.rect.position = new Vector2D(field.start.rect.position.x, field.start.rect.position.y)
        this.goal.rect.position = new Vector2D(field.goal.rect.position.x, field.goal.rect.position.y)
    }

    render(game) {
        this.ctx.clearRect(0, 0, 1280, 800)
        this.player.render(this)
        this.goal.render(this)
        game.ctx.drawImage(this.canvas, 0, 0)
    }
}