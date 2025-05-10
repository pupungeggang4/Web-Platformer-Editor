class FieldEdit {
    constructor() {
        this.player = new Player()
        this.goal = new Goal()
        this.tileMap = new TileMap()
        this.size = new Vector2D(800, 640)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.size.x
        this.canvas.height = this.size.y
        this.ctx = this.canvas.getContext('2d')
        this.camera = new Vector2D(0, 0)
    }

    handleTick(program) {

    }

    render(program) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.render(program, this)
        this.goal.render(program, this)
        this.tileMap.render(program, this)
        program.ctx.drawImage(this.canvas, UI.edit.fieldArea[0], UI.edit.fieldArea[1])
    }
}
