class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.a = [100, 100, 100]
    }

    add(vec) {
        this.x += vec.x
        this.y += vec.y
    }

    sub(vec) {
        this.x -= vec.x
        this.y -= vec.y
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}
