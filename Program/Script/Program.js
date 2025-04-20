let program

class Program {
    constructor() {
        this.scene = 'editor'
        this.state = ''
        this.menu = false

        this.delta = 0
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now()

        imageLoad()

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

        } else if (this.scene === 'test') {

        }

        this.programLoop = requestAnimationFrame(() => this.loop())
    }

    keyDown(event) {

    }

    keyUp(event) {

    }

    mouseUp(event) {

    }
}
