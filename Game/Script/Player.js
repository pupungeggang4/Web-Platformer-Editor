class Player extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 40, 40)
    }

    render(field) {
        Render.drawImageField(field.ctx, img.player, this.rect, field.camera)
    }
}