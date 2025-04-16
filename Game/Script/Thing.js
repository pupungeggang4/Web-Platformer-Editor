class Camera2D {
    constructor() {
        this.rect = new Rect2D(0, 0, 0, 0)
    }
}

class Thing {
    constructor() {

    }
}

class Wall {

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