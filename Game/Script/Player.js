class Player extends Thing {
    constructor() {
        super()
        this.rect = new Rect2D(0, 0, 0, 0)
    }

    render(ctx) {
        Render.drawImageField(ctx, img.player, this.rect, 0)
    }
}