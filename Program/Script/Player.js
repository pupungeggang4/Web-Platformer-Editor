class Player {
    constructor() {
        this.rect = new Rect2D(20, 20, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')

        this.speed = 200.0
        this.tempPosition = new Vector2D(0, 0)
        this.velocity = new Vector2D(0, 0)
        this.terminalSpeed = 800.0

        this.jump = 0
        this.jumpTime = 0
        this.jumpTimeMax = 0
        this.ground = false

        this.coin = 0
    }

    handleTick(program, field) {
        this.move(program, field)
        
    }

    move(program, field) {
        this.tempPosition.makeSame(this.rect.position)
        this.velocity.x = 0
        if (program.keyPressed['left'] === true) {
            this.velocity.x -= this.speed
        }
        if (program.keyPressed['right'] === true) {
            this.velocity.x += this.speed
        }
        this.velocity.y += field.gacceler * program.delta / 1000
        this.tempPosition.x += this.velocity.x * program.delta / 1000
        this.tempPosition.y += this.velocity.y * program.delta / 1000
        this.rect.position.makeSame(this.tempPosition)
    }

    render(program, field) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }
}
