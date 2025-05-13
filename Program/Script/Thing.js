class Thing {
    constructor() {
        
    }

    clone() {
        let o = new this.constructor()
        o.rect = this.rect.clone()
        if (o.constructor === Terrain) {
            o.setTileNo(this.tileNo)
        }
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
        this.solid = false
        this.rect = new Rect2D(0, 0, 40, 40)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
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

    selectAndDraw(sprite, row, col) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let cut = [col * this.canvas.width, row * this.canvas.height, this.canvas.width, this.canvas.height]
        this.ctx.drawImage(sprite, cut[0], cut[1], cut[2], cut[3], 0, 0, this.canvas.width, this.canvas.height)
    }
}

class Goal extends NonEmpty {
    constructor() {
        super()
        this.rect = new Rect2D(760, 1200, 80, 80)
        this.canvas.width = this.rect.size.x
        this.canvas.height = this.rect.size.y
        this.ctx = this.canvas.getContext('2d')
        this.spriteTotal = 4
    }

    handleTick(program, field) {
        if (Rect2D.Collide(this.rect, field.player.rect)) {
            program.state = 'win'
        }
    }

    render(program, field) {
        this.draw(img.sprite.goal)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }
}

class Collectable extends NonEmpty {
    constructor() {
        super()
    }

    handleTick(program, field) {
        if (Rect2D.Collide(this.rect, field.player.rect)) {
            this.collect(program, field)
            let index = field.thing.indexOf(this)
            field.thing.splice(index, 1)
        }
    }
}

class Coin extends Collectable {
    constructor() {
        super()
        this.spriteTotal = 4
    }

    collect(program, field) {
        field.player.coin += 1
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
        this.spriteTotal = 1
        this.tileNo = 0
        this.solid = true
    }

    setTileNo(no) {
        this.tileNo = no
    }

    handleTick(game, field) {

    }

    render(program, field) {
        let row = Math.floor(this.tileNo / 4)
        let col = this.tileNo % 4
        this.selectAndDraw(img.tileset.plains, row, col)
        Render.renderImageCam(field.ctx, this.canvas, this.rect, field.camera)
    }

    renderAtTileMap(program, field, tileMap) {
        let row = Math.floor(this.tileNo / 4)
        let col = this.tileNo % 4
        this.selectAndDraw(img.tileset.plains, row, col)
        Render.renderImageCam(tileMap.ctx, this.canvas, this.rect, field.camera)
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
        let startRow = Math.floor(field.camera.y / 40)
        let startColumn = Math.floor(field.camera.x / 40)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        for (let i = 0; i < 17; i++) {
            for (let j = 0; j < 21; j++) {
                if (cellInsideArray(startRow + i, startColumn + j, this.size[0], this.size[1])) {
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
