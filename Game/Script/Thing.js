class Camera2D {
    constructor() {
        this.rect = new Rect2D(0, 0, 0, 0)
    }
}

class Thing {
    constructor() {

    }
}

class Wall extends Thing {
    constructor() {
        super()
    }
}

class Collectable extends Thing {
    constructor() {
        super()
    }

    collectCheck() {

    }
}

class Coin extends Collectable {
    constructor(pos) {
        super()
        this.rect = new Rect2D(pos[0], pos[1], 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 40
        this.canvas.height = 40
        this.ctx = this.canvas.getContext('2d')
        this.animationTime = 0
        this.frameInterval = 0.2
        this.frameTotal = 4
        this.frameNum = 0
    }

    render(game, field) {
        this.animationTime += game.delta / 1000
        this.frameNum = Math.floor(this.animationTime / this.frameInterval) % this.frameTotal
        this.ctx.clearRect(0, 0, 40, 40)
        this.ctx.drawImage(img.thing.coin, 40 * this.frameNum, 0, 40, 40, 0, 0, 40, 40)
        Render.drawImageField(field.ctx, this.canvas, this.rect, field.camera)
    }

    clone() {
        let temp = new Coin([this.rect.position.x, this.rect.position.y])
        return temp
    }
}

class Start extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, field) {
        this.ctx.clearRect(0, 0, 40, 40)
        this.ctx.drawImage(img.thing.start, 0, 0)
        Render.drawImageField(field.ctx, this.canvas, this.rect, field.camera)
    }
}

class Goal extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 80, 80)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, field) {
        this.ctx.clearRect(0, 0, 80, 80)
        this.ctx.drawImage(img.thing.goal, 20, 20)
        Render.drawImageField(field.ctx, this.canvas, this.rect, field.camera)
    }
}
