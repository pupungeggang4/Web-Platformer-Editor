class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }

    clone() {
        return new Rect2D(this.position.x, this.position.y, this.size.x, this.size.y)
    }
}
