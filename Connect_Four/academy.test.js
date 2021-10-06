const AcademyModule = require('./academy');

test("test adding function", () => {
    // Consider descriptive test names:
    "When add is called"

    // Arrange
    const a = 2
    const b = 3
    const expectedOutput = 5

    // Act
    const actualOutput = AcademyModule.add(a,b)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

// test("We can place a piece in an empty column", () => {
//     // Consider descriptive test names:
//     // "When place is called on an empty row the counter goes to the bottom of the row"

//     // Arrange
//     let board = [[null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null]]
    
//     const player = "Mike"
//     const column = 1

//     const expectedOutput = [
//         [null, null, null, null], 
//         ["Mike", null, null, null], 
//         [null, null, null, null], 
//         [null, null, null, null]
//     ];

//     // Act
//     const actualOutput = placeModule.place(board, player, column)

//     // Assert
//     expect(actualOutput).toStrictEqual(expectedOutput)
// })

// test("We can place a second piece in a non empty column", () => {

//     // We can place a piece in a non empty column
//     // We can place a second piece in an already occupied column
//     // We can place a piece in an already occupied column

//     // Arrange
//     let board = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", null, null, null], 
//         [null, null, null, null]
//     ];
//     const player = "Emily";
//     const column = 2;

//     const expectedOutput = [
//         [null, null, null, null], 
//         [null, null, null, null], 
//         ["Mike", "Emily", null, null], 
//         [null, null, null, null]
//     ];

//     // Act
//     const actualOutput = placeModule.place(board, player, column);

//     // Assert
//     expect(actualOutput).toStrictEqual(expectedOutput);
// });

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
