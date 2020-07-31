// Char Meaning:
// 'S': Start
// 'W': Wall
// ' ': Empty
// 'E': Exit
export const levels = [
    { 
        board: [
            ['S',' ',' ',' ',' '],
            ['W','W',' ','W','W'],
            ['W','W',' ','W','W'],
            [' ',' ',' ','W','W'],
            ['W','W',' ',' ','E'],
        ],
        moves: 10
    },
    { 
        board: [
            ['S',' ','W',' ',' '],
            [' ','W',' ','W',' '],
            [' ','W',' ',' ',' '],
            [' ',' ',' ','W',' '],
            ['W','W',' ','W','E'],
        ],
        moves: 10
    },
    { 
        board: [
            [' ','W',' ',' ',' ',' ','W',' ',' '],
            [' ',' ',' ','W',' ','W','W',' ','W'],
            ['S','W',' ','W',' ',' ',' ',' ',' '],
            [' ','W',' ','W','W','W',' ','W',' '],
            ['W','W',' ','W',' ',' ',' ','W',' '],
            [' ',' ',' ','W',' ','W','W','W',' '],
            [' ','W','W','W',' ','W','E','W',' '],
            [' ','W',' ',' ',' ','W',' ',' ',' '],
            [' ',' ',' ','W',' ','W',' ','W',' '],
        ],
        moves: 20
    }
];