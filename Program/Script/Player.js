class Player {
    constructor() {
        this.rect = new Rect2D(20, 20, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    handleTick(program) {

    }

    render(program, field) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }
}
