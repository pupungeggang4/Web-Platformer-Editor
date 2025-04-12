class Field {
    constructor() {
        this.camera = new Camera2D()
        this.tile = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]
        this.canvas = document.createElement('canvas')
        this.canvas.width = 800
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')

        this.start = new Rect2D(96, 352, 40, 40)
        this.goal = new Rect2D(1200, 600, 40, 40)
    }

    render(game) {
        this.ctx.clearRect(0, 0, 800, 720)
        for (let i = 0; i < this.tile.length; i++) {
            for (let j = 0; j < this.tile[0].length; j++) {
                this.ctx.strokeRect(64 * j, 64 * i, 64, 64)
            }
        }
        Render.drawImageField(this.ctx, img.thing.start, this.start, this.camera)
        game.ctx.drawImage(this.canvas, 240, 40)
    }
}
