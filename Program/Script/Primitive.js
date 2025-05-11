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

    vectorInsideRect(vec) {
        return vec.x > this.position.x - this.size.x / 2 && vec.x < this.position.x + this.size.x / 2 && vec.y > this.position.y - this.size.y / 2 && vec.y < this.position.y + this.size.y / 2 
    }

    clone() {
        return new Rect2D(this.position.x, this.position.y, this.size.x, this.size.y)
    }

    static Collide(r1, r2) {
        return (r1.size.x / 2 + r2.size.x / 2) > Math.abs(r1.position.x - r2.position.x) && (r1.size.y / 2 + r2.size.y / 2) > Math.abs(r1.position.y - r2.position.y)
    }

    static CollideAtLeft(r1, r2) {
        let p = new Vector2D(r1.position.x - r1.size.x / 2, r1.position.y)
        return r2.vectorInsideRect(p)
    }

    static CollideAtRight(r1, r2) {
        let p = new Vector2D(r1.position.x + r1.size.x / 2, r1.position.y)
        return r2.vectorInsideRect(p)
    }

    static CollideAtDown(r1, r2) {
        let p1 = new Vector2D(r1.position.x - r1.size.x / 2, r1.position.y + r1.size.y / 2)
        let p2 = new Vector2D(r1.position.x, r1.position.y + r1.size.y / 2)
        let p3 = new Vector2D(r1.position.x + r1.size.x / 2, r1.position.y + r1.size.y / 2)

        return r2.vectorInsideRect(p1) || r2.vectorInsideRect(p2) || r2.vectorInsideRect(p3)
    }

    static CollideAtUp(r1, r2) {
        let p = new Vector2D(r1.position.x, r1.position.y - r1.size.y / 2)

        return r2.vectorInsideRect(p)
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
        if ((r1.size.x / 2 + r2.size.x / 2) > Math.abs(r1.position.x - r2.position.x) && (r1.size.y / 2 + r2.size.y / 2) > Math.abs(r1.position.y - r2.position.y)) {
            if (r1.position.x > r2.position.x) {
                return (r2.size.x / 2 + r1.size.x / 2) - (r1.position.x - r2.position.x)
            } else {
                return (r2.position.x - r1.position.x) - (r2.size.x / 2 + r1.size.x / 2)
            }
        }
        return 0
    }
}
