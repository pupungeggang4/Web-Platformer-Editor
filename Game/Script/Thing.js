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
    constructor(rect) {
        super()
        self.rect = new Rect2D(rect[0], rect[1], rect[2], rect[3])
        self.canvas = document.createElement('canvas')
        self.canvas.width = 40
        self.canvas.height = 40
        self.context = self.canvas.getContext('2d')
        self.animationTime = 0
        self.frameInterval = 0.2
        self.frameNum = 0
    }

    render() {

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

    render(field) {
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

    render(field) {
        this.ctx.clearRect(0, 0, 80, 80)
        this.ctx.drawImage(img.thing.goal, 20, 20)
        Render.drawImageField(field.ctx, this.canvas, this.rect, field.camera)
    }
}
