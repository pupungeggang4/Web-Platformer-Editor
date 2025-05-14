class Player extends NonEmpty{
    constructor() {
        super()
        this.rect = new Rect2D(20, 1220, 40, 40)
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.spriteTotal = 4

        this.speed = 200.0
        this.tempPosition = new Vector2D(0, 0)
        this.velocity = new Vector2D(0, 0)
        this.terminalSpeed = 800.0

        this.jump = 0
        this.jumpLock = false
        this.ground = false
        this.jumpPower = -400.0

        this.jumping = false
        this.jumpTime = 0
        this.jumpTimeMax = 0.25

        this.jumpPeriod = false

        this.coin = 0
    }

    handleTick(program, field) {
        this.move(program, field)
        
    }

    move(program, field) {
        this.velocity.x = 0
        if (program.keyPressed['left'] === true) {
            this.velocity.x -= this.speed
        }
        if (program.keyPressed['right'] === true) {
            this.velocity.x += this.speed
        }
        if (program.keyPressed['up'] === true) {
            if (this.ground === true && this.jumpLock === false && this.jump > 0) {
                this.jump -= 1
                this.jumpPeriod = true
                this.jumping = true
                this.jumpLock = true
                this.jumpTime = 0
            } else if (this.jumpPeriod === true && this.jumping === false && this.jump > 0) {
                this.jump -= 1
                this.jumping = true
                this.jumpTime = 0
            }
            if (this.jumping === true) {
                if (this.jumpTime < this.jumpTimeMax) {
                    this.jumpTime += program.delta / 1000
                    this.velocity.y = this.jumpPower
                }
            }
        } else {
            if (this.jumping === true) {
                this.jumping = false
            }
            if (this.ground === true) {
                this.jumpLock = false
            }
        }
        this.velocity.y += field.gacceler * program.delta / 1000
        if (this.velocity.y > this.terminalSpeed) {
            this.velocity.y = this.terminalSpeed
        }
        this.rect.position.x += this.velocity.x * program.delta / 1000
        this.rect.position.y += this.velocity.y * program.delta / 1000

        this.handleCollide(field)
    }

    handleCollide(field) {
        for (let i = 0; i < field.thing.length; i++) {
            let thing = field.thing[i]
            if (thing.solid === true) {
                let overlapH = Rect2D.FindOverlapH(this.rect, thing.rect)
                let overlapV = Rect2D.FindOverlapV(this.rect, thing.rect)
                
                if (Rect2D.CollideAtLeft(this.rect, thing.rect)) {
                    this.rect.position.x += overlapH + 0.01
                }
                if (Rect2D.CollideAtRight(this.rect, thing.rect)) {
                    this.rect.position.x += overlapH - 0.01
                }

                overlapH = Rect2D.FindOverlapH(this.rect, thing.rect)
                overlapV = Rect2D.FindOverlapV(this.rect, thing.rect)

                if (Rect2D.CollideAtUp(this.rect, thing.rect)) {
                    this.rect.position.y += overlapV
                    this.velocity.y = 0
                    this.jumpTime = this.jumpTimeMax
                }
                if (Rect2D.CollideAtDown(this.rect, thing.rect)) {
                    this.rect.position.y += overlapV
                    this.velocity.y = 0
                    this.ground = true
                    this.jumpPeriod = false
                    this.jump = 1
                }
            }
        }
    }

    render(program, field) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw(img.sprite.player)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }
}
