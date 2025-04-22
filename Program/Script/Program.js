let program

class Program {
    constructor() {
        imageLoad()

        this.scene = 'editor'
        this.state = ''
        this.menu = false

        this.delta = 0
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()

        this.fieldEdit = new FieldEdit()
        this.fieldTest = []

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

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

        if (this.scene === 'editor') {
            SceneEdit.keyDown(this, key)
        } else if (this.scene === 'test') {
            SceneTest.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        if (this.scene === 'editor') {
            SceneEdit.keyUp(this, key)
        } else if (this.scene === 'test') {
            SceneTest.keyUp(this, key)
        }
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * targetRect.width,
            y: (event.clientY - targetRect.top) / targetRect.height * targetRect.height
        }
        let button = event.button

        if (this.scene === 'editor') {
            SceneEdit.mouseUp(this, pos, button)
        } else if (this.scene === 'test') {
            SceneTest.mouseUp(this, pos, button)
        }
    }
}
