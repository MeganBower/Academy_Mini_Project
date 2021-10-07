const AcademyModule = require('./academy');

test("We can place a piece in an empty column", () => {
    "When takeTurn is called on an empty column the counter goes to the bottom of the column"

    // Arrange
    let board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]]
    
    const row = 1
    const column = 1

    const expectedOutput = [[null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, "purple", null, null, null, null, null]]

    // Act
    const actualOutput = AcademyModule.takeTurn(row, column)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("We can place a second piece in a non empty column", () => {
    "When takeTurn is called on a column with one piece in, the counter goes to the next available space"

    // Arrange
    let board = [[null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, "purple", null, null, null, null, null]]
    
    const row = 2
    const column = 1

    const expectedOutput = [[null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, "orange", null, null, null, null, null],
                            [null, "purple", null, null, null, null, null]]

    // Act
    const actualOutput = AcademyModule.takeTurn(row, column)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("We can place a second piece in a non empty column with more pieces on the board", () => {
    "When takeTurn is called on a column with one piece in, the counter goes to the next available space"

    // Arrange
    let board = [[null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, null, null, null, null, null, null],
                [null, "purple", null, "orange", null, null, null]]
    
    const row = 2
    const column = 1

    const expectedOutput = [[null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, null, null, null, null, null, null],
                            [null, "purple", null, null, null, null, null],
                            [null, "purple", null, "orange", null, null, null]]

    // Act
    const actualOutput = AcademyModule.takeTurn(row, column)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

// test("We can place a third piece in a non empty column", () => {
//     // Arrange
//     let board = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", null, null], 
//         [null, null, null, null]
//     ];
//     const player = "Mike";
//     const column = 2;

//     const expectedOutput = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", "Mike", null], 
//         [null, null, null, null]
//     ];

//     // Act
//     const actualOutput = placeModule.place(board, player, column);

//     // Assert
//     expect(actualOutput).toStrictEqual(expectedOutput);
// });

// test("We can place a fourth piece in a non empty column", () => {
//     // Arrange
//     let board = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", "Mike", null], 
//         [null, null, null, null]
//     ];
//     const player = "Emily";
//     const column = 2;

//     const expectedOutput = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", "Mike", "Emily"], 
//         [null, null, null, null]
//     ];

//     // Act
//     const actualOutput = placeModule.place(board, player, column);

//     // Assert
//     expect(actualOutput).toStrictEqual(expectedOutput);
// });

// test("We can not place a fifth piece in a full column", () => {
//     // Arrange
//     let board = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", "Mike", "Emily"], 
//         [null, null, null, null]
//     ];
//     const player = "Mike";
//     const column = 2;

//     const expected_board = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", "Mike", "Emily"], 
//         [null, null, null, null]
//     ];

//     const expectedOutput = undefined

//     // Act
//     const actualOutput = placeModule.place(board, player, column);

//     // Assert
//     expect(actualOutput).toStrictEqual(expectedOutput);
//     expect(board).toStrictEqual(expected_board);
// });
