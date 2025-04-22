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
    }
}
