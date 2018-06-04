// cellsをworldに改名したい
var app = new Vue({
  el: '#app',
  data: {
    generation: 0,
    row: 60,
    col: 60,
    cells: null,
    worldEnd: 100
  },
  methods: {
    createLives() {
      for (var i = 0; i < 300; i++) {
        this.cells[randint(this.row)][randint(this.col)] = 1;
      }
    },

    // ムーア近傍における生き物の数を調べる。
    // 本来セルは無限に存在するはずだが、実現不可能なのでデータの範囲外は生き物がいないものとする。
    countAroundLives: function(r, c) {
      var cnt = 0;

      for (var dr = -1; dr <= 1; dr++) {
        for (var dc = -1; dc <= 1; dc++) {
          if (dr == 0 && dc == 0) {
            continue;
          }

          var nr = r + dr,
              nc = c + dc;
          if (0 <= nr && nr < this.row &&
              0 <= nc && nc < this.col && this.cells[nr][nc]) {
            cnt++;
          }
        }
      }
      return cnt;
    },
    updateCells: function() {
      // 状態遷移
      for (var r = 0; r < this.row; r++) {
        for (var c = 0; c < this.col; c++) {
          var cnt = this.countAroundLives(r, c);

          if (cnt === 2) {
            // 何もしない
          } else if (cnt === 3) {
            this.cells[r][c] = 1;
          } else {
            this.cells[r][c] = 0;
          }
        }
      }
    },
    playStart: function(event) {
      var _this = this;

      var id = setInterval(function() {
        _this.generation++;

        _this.updateCells();

        if (_this.generation >= _this.worldEnd) {
          clearInterval(id);
        }
      }, 500);
    },
    getCellColor: function(r, c) {
      var colors = ['black', 'green'],
          state = -1;
      if (this.cells === null) {
        state = 0;
      } else {
        state = this.cells[r][c];
      }
      return colors[state];
    },
    // ゲームが始まる前にクリックしたセルの状態を変えるために使いたかった。
    /*
    changeCellState: function(r, c) {
      this.cells[r][c] ^= 1;
    }
    */
  }
});

// ここをどうにかしたい
app.cells = generateMatrix(app.row, app.col);
app.createLives();
