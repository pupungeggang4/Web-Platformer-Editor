let program

class Program {
    constructor() {
        imageLoad()

        this.scene = 'editor'
        this.state = ''
        this.editState = ''
        this.menu = false
        this.brush = -1

        this.mousePressed = false
        this.mouseDelta = {x: 0, y: 0}
        this.keyBinding = {
            'up': 'w', 'left': 'a', 'down': 's', 'right': 'd'
        }
        this.keyPressed = {
            'up': false, 'left': false, 'down': false, 'right': false
        }

        this.fieldEdit = new FieldEdit()
        this.fieldTest = new FieldTest()

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        window.addEventListener('mousedown', (event) => this.mouseDown(event), false)
        window.addEventListener('mousemove', (event) => this.mouseMove(event), false)
        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.delta = 0
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()
        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'editor') {
            SceneEdit.loop(this)
        } else if (this.scene === 'test') {
            SceneTest.loop(this)
        }

        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyBinding[k]) {
                this.keyPressed[k] = true
            }
        }

        if (this.scene === 'editor') {
            SceneEdit.keyDown(this, key)
        } else if (this.scene === 'test') {
            SceneTest.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        for (let k in this.keyPressed) {
            if (key === this.keyBinding[k]) {
                this.keyPressed[k] = false
            }
        }

        if (this.scene === 'editor') {
            SceneEdit.keyUp(this, key)
        } else if (this.scene === 'test') {
            SceneTest.keyUp(this, key)
        }
    }

    mouseDown(event) {
        this.mousePressed = true
    }

    mouseMove(event) {
        this.mouseDelta = {x: event.movementX, y: event.movementY}
    }

    mouseUp(event) {
        this.mousePressed = false
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'editor') {
            SceneEdit.mouseUp(this, pos, button)
        } else if (this.scene === 'test') {
            SceneTest.mouseUp(this, pos, button)
        }
    }
}

function pointInsideRectUI(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
}

function cellInsideArray(row, col, arrayRow, arrayCol) {
    return row >= 0 && col >= 0 && row < arrayRow && col < arrayCol
}
