class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 800)
        ctx.fillRect(0, 0, 1280, 800)
        ctx.fillStyle = 'black'
    }

    static renderUpperBar(program) {
        this.renderRectUI(program.ctx, UI.edit.upper.rect)
        this.renderImageUI(program.ctx, img.button.newFile, UI.edit.upper.buttonNewFile)
        this.renderImageUI(program.ctx, img.button.saveFile, UI.edit.upper.buttonSaveFile)
        this.renderImageUI(program.ctx, img.button.openFile, UI.edit.upper.buttonOpenFile)
        this.renderImageUI(program.ctx, img.button.tile, UI.edit.upper.buttonTile)
        this.renderImageUI(program.ctx, img.button.thing, UI.edit.upper.buttonThing)
        this.renderImageUI(program.ctx, img.button.start, UI.edit.upper.buttonStart)
        this.renderImageUI(program.ctx, img.button.goal, UI.edit.upper.buttonGoal)
        this.renderImageUI(program.ctx, img.button.play, UI.edit.upper.buttonPlay)
    }

    static renderLeftBar(program) {
        this.renderRectUI(program.ctx, UI.edit.left.rect)
    }

    static renderRightBar(program) {
        this.renderRectUI(program.ctx, UI.edit.right.rect)
    }

    static renderLowerBar(program) {
        this.renderRectUI(program.ctx, UI.edit.lower.rect)
    }

    static renderRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static renderImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }
}
