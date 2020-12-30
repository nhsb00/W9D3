class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el; 

        this.setupTowers();
    }


    setupTowers() {
        for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
            let $tower = $("<ul>");
            for (let diskIdx = 0; diskIdx < 3; diskIdx++) {
                let $disk = $("<li>");
                $tower.append($disk);
            }
            this.$el.append($tower);
        }
    }
}

module.exports = View