class Render {
    static init(game) {
        game.ctx.font = '32px neodgm'
        game.ctx.textAlign = 'left'
        game.ctx.textBaseline = 'top'
        game.ctx.lineWidth = 2
        game.ctx.strokeStyle = 'Black'
        game.ctx.fillStyle = 'White'
        game.ctx.clearRect(0, 0, 1280, 800)
        game.ctx.fillRect(0, 0, 1280, 800)
        game.ctx.fillStyle = 'Black'
    }

    static renderField(game) {

    }

    static renderUpperBar(game) {
        this.strokeRectUI(game, UI.editor.upper.rect)
        this.drawImageUI(game, img.button.newFile, UI.editor.upper.buttonNewFile)
        this.drawImageUI(game, img.button.openFile, UI.editor.upper.buttonOpenFile)
        this.drawImageUI(game, img.button.saveFile, UI.editor.upper.buttonSaveFile)
    }

    static renderLeftBar(game) {
        this.strokeRectUI(game, UI.editor.left.rect)
    }

    static renderRightBar(game) {
        this.strokeRectUI(game, UI.editor.right.rect)
    }

    static renderLowerBar(game) {
        this.strokeRectUI(game, UI.editor.lower.rect)
    }

    static strokeRectUI(game, rect) {
        game.ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static drawImageUI(game, img, pos) {
        game.ctx.drawImage(img, pos[0], pos[1])
    }
}
