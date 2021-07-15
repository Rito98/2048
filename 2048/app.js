document.addEventListener('DOMContentLoaded', () => {
    const display_grid = document.querySelector('.grid')
    const display_score = document.querySelector('#score')
    const display_result = document.getElementById('result')
    const width = 4
    let sq = []

    //The table to play on
    function create_table() {
        for (let i = 0; i < width * width; ++i) {
            sq_table = document.createElement('div')
            sq_table.innerHTML = 0
            display_grid.appendChild(sq_table)
            sq.push(sq)
        }
        random_generate()
    }
    create_table()

    //Generate a number at a random position
    function random_generate() {
        let ran_num = Math.floor(Math.random() * sq.length);
        if (sq.ran_num % 2)
    }
})