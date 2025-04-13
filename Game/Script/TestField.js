class TestField {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.canvas.width = 1280
        this.canvas.height = 800
        this.ctx = this.canvas.getContext('2d')
        this.player = new Player()
    }

    loadField(field) {
        this.player.rect.position = new Vector2D(field.start.position.x, field.start.position.y)
    }

    render(game) {
        this.ctx.clearRect(0, 0, 1280, 800)
        this.player.render(this.ctx)
        game.ctx.drawImage(this.canvas, 0, 0)
    }
}