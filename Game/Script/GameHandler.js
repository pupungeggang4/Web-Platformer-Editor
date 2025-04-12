var game

class Game {
    constructor() {
        imageLoad()

        this.scene = 'editor'
        this.state = ''

        this.editor = new Editor()

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')

        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.frameCurrent = performance.now()
        this.framePrevious = 0
        this.delta = 16

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        if (this.scene === 'editor') {
            SceneEditor.loop(this)
        } else if (this.scene === 'test') {
            SceneTest.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        if (this.scene === 'editor') {
            SceneEditor.mouseUp(this, pos, button)
        } else if (this.scene === 'test') {
            SceneTest.mouseUp(this, pos, button)
        }
    }
}

function pointInsideRectUI(point, rect) {
    return point.x > rect[0] && point.x < rect[0] + rect[2] && point.y > rect[1] && point.y < rect[1] + rect[3]
}
