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
        this.renderImageUI(program, img.button.newFile, UI.edit.upper.buttonNewFile)
        this.renderImageUI(program, img.button.saveFile, UI.edit.upper.buttonSaveFile)
        this.renderImageUI(program, img.button.openFile, UI.edit.upper.buttonOpenFile)
        //this.renderImageUI(program, img.button.newFile, UI.edit.upper.buttonNewFile)
        //this.renderImageUI(program, img.button.newFile, UI.edit.upper.buttonNewFile)
    }

    static renderLeftBar(program) {
        this.renderRectUI(program, UI.edit.left.rect)
    }

    static renderRightBar(program) {
        this.renderRectUI(program, UI.edit.right.rect)
    }

    static renderLowerBar(program) {
        this.renderRectUI(program, UI.edit.lower.rect)
    }

    static renderRectUI(program, rect) {
        program.ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static renderImageUI(program, image, pos) {
        program.ctx.drawImage(image, pos[0], pos[1])
    }
}
