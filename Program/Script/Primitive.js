class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    translate(v) {
        this.x += v.x
        this.y += v.y
    }

    makeSame(v) {
        this.x = v.x
        this.y = v.y
    }

    clone() {
        return new Vector2D(this.x, this.y)
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

    static Collide(r1, r2) {
        return (r1.size.x / 2 + r2.size.x / 2) > Math.abs(r1.position.x - r2.position.x) && (r1.size.y / 2 + r2.size.y / 2) > Math.abs(r1.position.y - r2.position.y)
    }

    static FindOverlapV(r1, r2) {
        if ((r1.size.x / 2 + r2.size.x / 2) > Math.abs(r1.position.x - r2.position.x) && (r1.size.y / 2 + r2.size.y / 2) > Math.abs(r1.position.y - r2.position.y)) {
            if (r1.position.y > r2.position.y) {
                return (r2.size.y / 2 + r1.size.y / 2) - (r1.position.y - r2.position.y)
            } else {
                return (r2.position.y - r1.position.y) - (r2.size.y / 2 + r1.size.y / 2)
            }
        }
        return 0
    }

    static FindOverlapH(r1, r2) {

    }
}
