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
        this.thing = [new Coin([-40, 0]), new Coin([0, 0]), new Coin([40, 0])]

        this.canvas = document.createElement('canvas')
        this.canvas.width = 800
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
        this.camera.rect.size = new Vector2D(this.canvas.width, this.canvas.height)

        this.start = new Start()
        this.start.rect.position = new Vector2D(-320, 0)
        this.goal = new Goal()
        this.goal.rect.position = new Vector2D(320, 0)
    }

    render(game) {
        this.ctx.clearRect(0, 0, 800, 720)
        for (let i = 0; i < this.tile.length; i++) {
            for (let j = 0; j < this.tile[0].length; j++) {
                this.ctx.strokeRect(64 * j, 64 * i, 64, 64)
            }
        }
        this.start.render(game, this)
        this.goal.render(game, this)
        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].render(game, this)
        }
        game.ctx.drawImage(this.canvas, 240, 40)
    }
}
