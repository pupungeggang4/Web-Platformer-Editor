class Thing {
    constructor() {

    }
}

class Empty extends Thing {
    constructor() {
        super()
    }
}

class Collectable extends Thing {
    constructor() {
        super()
    }
}

class Coin extends Thing {
    constructor() {
        super()
    }
}

class Terrain extends Thing {
    constructor() {
        super()
    }
}

class TileMap {
    size = [32, 128]

    constructor() {
        this.cell = []
        let temp = []
        for (let i = 0; i < this.size[0]; i++) {
            temp = []
            for (let j = 0; j < this.size[1]; j++) {
                temp.push(new Empty())
            }
            this.cell.push(temp)
        }
        this.canvas = document.createElement('canvas')
        this.canvas.width = 800
        this.canvas.height = 720
        this.ctx = this.canvas.getContext('2d')
    }

    render(program, field) {
        let startRow = Math.floor(field.camera.x / 40)
        let startColumn = Math.floor(field.camera.y / 40)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.setTransform(1, 0, 0, 1, -field.camera.x, -field.camera.y)

        for (let i = 0; i < 19; i++) {
            for (let j = 0; j < 21; j++) {
                if (startRow + i < this.size[0] && startColumn + j < this.size[1]) {
                    Render.strokeRectUI(this.ctx, [(startColumn + j) * 40, (startRow + i) * 40, 40, 40])
                }
            }
        }

        field.ctx.drawImage(this.canvas, 0, 0)
    }
}
