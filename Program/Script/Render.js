class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderUpperBar(program) {
        this.strokeRectUI(program.ctx, UI.edit.upper.rect)
        this.drawImageUI(program.ctx, img.button.newFile, UI.edit.upper.buttonNewFile)
        this.drawImageUI(program.ctx, img.button.saveFile, UI.edit.upper.buttonSaveFile)
        this.drawImageUI(program.ctx, img.button.openFile, UI.edit.upper.buttonOpenFile)
        this.drawImageUI(program.ctx, img.button.tile, UI.edit.upper.buttonTile)
        this.drawImageUI(program.ctx, img.button.thing, UI.edit.upper.buttonThing)
        this.drawImageUI(program.ctx, img.button.start, UI.edit.upper.buttonStart)
        this.drawImageUI(program.ctx, img.button.goal, UI.edit.upper.buttonGoal)
        this.drawImageUI(program.ctx, img.button.camera, UI.edit.upper.buttonCamera)
        this.drawImageUI(program.ctx, img.button.play, UI.edit.upper.buttonPlay)
    }

    static renderLeftBar(program) {
        this.strokeRectUI(program.ctx, UI.edit.left.rect)

        if (program.editState === 'tile') {
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 3; j++) {
                    program.ctx.strokeRect(UI.edit.left.rect[0] + UI.edit.buttonSize[0] * j, UI.edit.left.rect[1] + UI.edit.buttonSize[1] * i, UI.edit.buttonSize[0], UI.edit.buttonSize[1])
                }
            }

            program.ctx.drawImage(img.icon.deselect, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 0 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1])
            program.ctx.drawImage(img.icon.erase, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 1 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1])
            program.ctx.drawImage(img.tileset.plains, 0, 0, 40, 40, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 2 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1], 40, 40)
            program.ctx.drawImage(img.tileset.plains, 40, 0, 40, 40, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 0 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 1 + UI.edit.icon[1], 40, 40)

            program.ctx.strokeStyle = 'Green'
            let bRow = Math.floor((program.brush + 1) / 3)
            let bColumn = (program.brush + 1) % 3
            program.ctx.strokeRect(UI.edit.left.rect[0] + UI.edit.buttonSize[0] * bColumn, UI.edit.left.rect[1] + UI.edit.buttonSize[1] * bRow, UI.edit.buttonSize[0], UI.edit.buttonSize[1])
            program.ctx.strokeStyle = 'Black'
        } else if (program.editState === 'thing') {
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j < 3; j++) {
                    program.ctx.strokeRect(UI.edit.left.rect[0] + UI.edit.buttonSize[0] * j, UI.edit.left.rect[1] + UI.edit.buttonSize[1] * i, UI.edit.buttonSize[0], UI.edit.buttonSize[1])
                }
            }

            program.ctx.drawImage(img.icon.deselect, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 0 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1])
            program.ctx.drawImage(img.icon.erase, UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 1 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1])
            program.ctx.drawImage(img.icon[1], UI.edit.left.rect[0] + UI.edit.buttonSize[0] * 2 + UI.edit.icon[0], UI.edit.left.rect[1] + UI.edit.buttonSize[1] * 0 + UI.edit.icon[1])

            program.ctx.strokeStyle = 'Green'
            let bRow = Math.floor((program.brush + 1) / 3)
            let bColumn = (program.brush + 1) % 3
            program.ctx.strokeRect(UI.edit.left.rect[0] + UI.edit.buttonSize[0] * bColumn, UI.edit.left.rect[1] + UI.edit.buttonSize[1] * bRow, UI.edit.buttonSize[0], UI.edit.buttonSize[1])
            program.ctx.strokeStyle = 'Black'
        }
    }

    static renderRightBar(program) {
        this.strokeRectUI(program.ctx, UI.edit.right.rect)
    }

    static renderLowerBar(program) {
        this.strokeRectUI(program.ctx, UI.edit.lower.rect)
        this.fillTextUI(program.ctx, `${program.editState}`, UI.edit.lower.textEditState)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, image, pos) {
        ctx.drawImage(image, pos[0], pos[1])
    }

    static renderRectCam(ctx, rect, cam) {
        ctx.strokeRect(rect.position.x - cam.x - rect.size.x / 2, rect.position.y - cam.y - rect.size.y / 2, rect.size.x, rect.size.y)
    }

    static renderImageCam(ctx, img, rect, cam) {
        ctx.drawImage(img, rect.position.x - cam.x - rect.size.x / 2, rect.position.y - cam.y - rect.size.y / 2, rect.size.x, rect.size.y)
    }
}
