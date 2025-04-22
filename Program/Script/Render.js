class Render {
    static init(program) {
        program.ctx.font = '32px neodgm'
        program.ctx.textAlign = 'left'
        program.ctx.textBaseline = 'top'
        program.ctx.strokeStyle = 'black'
        program.ctx.lineWidth = 2
        program.ctx.fillStyle = 'white'
        program.ctx.clearRect(0, 0, 1280, 800)
        program.ctx.fillRect(0, 0, 1280, 800)
        program.ctx.fillStyle = 'black'
    }

    static renderUpperBar(program) {
        this.renderRectUI(program, UI.edit.upper.rect)
    }

    static renderRectUI(program, rect) {
        program.ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }
}
