const AcademyModule = require('./academy');

xtest("We can place a piece in an empty column", () => {
    "When takeTurn is called on an empty column the counter goes to the bottom of the column"

    // Arrange
    const board = [[null, null, null, null, null, null, null],
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
    const actualOutput = AcademyModule.takeTurn(row, column, board)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("We can place a second piece in a non empty column", () => {
    "When takeTurn is called on a column with one piece in, the counter goes to the next available space"

    // Arrange
    const board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, "purple", null, null, null]]

    const row = 2
    const column = 3

    const expectedOutput = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, "orange", null, null, null],
    [null, null, null, "purple", null, null, null]]

    // Act
    const actualOutput = AcademyModule.takeTurn(row, column, board)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

test("We can place a second piece in a non empty column with more pieces on the board", () => {
    "When takeTurn is called on a column with one piece in, the counter goes to the next available space"

    // Arrange
    const board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, "purple", null, "orange", null, null]]

    const row = 3
    const column = 2

    const expectedOutput = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, "purple", null, null, null, null],
    [null, null, "purple", null, "orange", null, null]]

    // Act
    const actualOutput = AcademyModule.takeTurn(row, column, board)

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput)
})

