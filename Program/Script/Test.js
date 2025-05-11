class FieldTest {
    constructor() {
        this.player = new Player()
        this.goal = new Goal()
        this.camera = new Vector2D(0, 0)
        this.thing = []
        this.size = new Vector2D(1280, 720)
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.size.x
        this.canvas.height = this.size.y
        this.ctx = this.canvas.getContext('2d')

        this.gacceler = 1600.0
    }

    loadField(field) {
        this.player = new Player()
        this.player.rect = field.player.rect.clone()
        this.goal.rect = field.goal.rect.clone()
        this.camera = field.camera.clone()
        let tileCell = field.tileMap.cell

        this.thing = []
        for (let i = 0; i < tileCell.length; i++) {
            for (let j = 0; j < tileCell[0].length; j++) {
                if (tileCell[i][j].constructor != Empty) {
                    this.thing.push(tileCell[i][j].clone())
                }
            }
        }
    }

    handleTick(program) {
        this.player.handleTick(program, this)
        this.goal.handleTick(program, this)
        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].handleTick(program, this)
        }
    }

    render(program) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].render(program, this)
        }
        this.goal.render(program, this)
        this.player.render(program, this)
        program.ctx.drawImage(this.canvas, 0, 0)
    }
}
