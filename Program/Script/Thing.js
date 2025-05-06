class Thing {
    constructor() {
        
    }

    clone() {
        let o = new this.constructor()
        o.rect = this.rect.clone()
        return o
    }
}

class Empty extends Thing {
    constructor() {
        super()
    }

    placeTileMap(tilemap, row, col) {
        tilemap.cell[row][col] = this
    }
}

class NonEmpty extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = 40
        this.canvas.height = 40
        this.ctx = this.canvas.getContext('2d')
        this.spriteCurrent = 0
        this.spriteTotal = 0
        this.spriteInterval = 250
    }

    placeTileMap(tilemap, row, col) {
        tilemap.cell[row][col] = this
        this.rect.position = new Vector2D(col * 40 + 20, row * 40 + 20)
    }

    draw(sprite) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.spriteCurrent = Math.floor(performance.now() / this.spriteInterval) % this.spriteTotal
        let spriteRow = Math.floor(this.spriteCurrent / 4)
        let spriteColumn = this.spriteCurrent % 4
        let cut = [spriteColumn * this.canvas.width, spriteRow * this.canvas.height, this.canvas.width, this.canvas.height]
        this.ctx.drawImage(sprite, cut[0], cut[1], cut[2], cut[3], 0, 0, this.canvas.width, this.canvas.height)
    }
}

class Collectable extends NonEmpty {
    constructor() {
        super()
    }
}

class Coin extends Collectable {
    constructor() {
        super()
        this.spriteTotal = 4
    }

    render(program, field) {
        this.draw(img.sprite.coin)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }

    renderAtTileMap(program, field, tileMap) {
        this.draw(img.sprite.coin)
        Render.renderImageCam(tileMap.ctx, this.canvas, this.rect, field.camera)
    }
}

class Terrain extends NonEmpty {
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

        for (let i = 0; i < 17; i++) {
            for (let j = 0; j < 21; j++) {
                if (startRow + i < this.size[0] && startColumn + j < this.size[1]) {
                    Render.strokeRectUI(this.ctx, [(startColumn + j) * 40 - field.camera.x, (startRow + i) * 40 - field.camera.y, 40, 40])
                    let cell = this.cell[startRow + i][startColumn + j]
                    if (cell.constructor != Empty) {
                        cell.renderAtTileMap(program, field, this)
                    }
                }
            }
        }

        field.ctx.drawImage(this.canvas, 0, 0)
    }
}
