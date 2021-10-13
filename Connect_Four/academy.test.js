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

xtest("We can place a second piece in a non empty column", () => {
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

xtest("We can place a second piece in a non empty column with more pieces on the board", () => {
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

describe("When we call checkWinnerRow", () => {
    test("it returns purple when there are four purples in a row", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", "purple", "purple", "purple", null]]

        const expectedOutput = 'purple'

        // Act
        const actualOutput = AcademyModule.checkWinnerRow(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns orange when there are four oranges in a row", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "orange", "orange", "orange", "orange", null]]

        const expectedOutput = 'orange'

        // Act
        const actualOutput = AcademyModule.checkWinnerRow(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no winning row combinations on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", "orange", "orange", "orange", null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerRow(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no pieces on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerRow(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })
})

describe("When we call checkWinnerColumn", () => {
    test("it returns purple when there are four purples in a column", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", null, null, null, null],
        [null, null, "purple", null, null, null, null],
        [null, null, "purple", null, null, null, null],
        [null, null, "purple", null, null, null, null]]

        const expectedOutput = 'purple'

        // Act
        const actualOutput = AcademyModule.checkWinnerColumn(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns orange when there are four oranges in a column", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "orange", null, null, null, null],
        [null, null, "orange", null, null, null, null],
        [null, null, "orange", null, null, null, null],
        [null, null, "orange", null, null, null, null]]

        const expectedOutput = 'orange'

        // Act
        const actualOutput = AcademyModule.checkWinnerColumn(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no winning column combinations on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", "orange", "orange", "orange", null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerColumn(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no pieces on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerColumn(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })
})

describe("When we call checkWinnerDiagonalUp", () => {
    test("it returns purple when there are four purples in a diagonal up", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, "purple", null],
        [null, null, null, null, "purple", null, null],
        [null, null, null, "purple", null, null, null],
        [null, null, "purple", null, null, null, null]]

        const expectedOutput = 'purple'

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalUp(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns orange when there are four oranges in a diagonal up", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, "orange", null],
        [null, null, null, null, "orange", null, null],
        [null, null, null, "orange", null, null, null],
        [null, null, "orange", null, null, null, null]]

        const expectedOutput = 'orange'

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalUp(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no winning diagonal up combinations on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", "orange", "orange", "orange", null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalUp(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no pieces on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalUp(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })
})

describe("When we call checkWinnerDiagonalDown", () => {
    test("it returns purple when there are four purples in a diagonal down", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, "purple", null, null, null, null, null],
        [null, null, "purple", null, null, null, null],
        [null, null, null, "purple", null, null, null],
        [null, null, null, null, "purple", null, null]]

        const expectedOutput = 'purple'

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalDown(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns orange when there are four oranges in a diagonal down", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, "orange", null, null, null, null, null],
        [null, null, "orange", null, null, null, null],
        [null, null, null, "orange", null, null, null],
        [null, null, null, null, "orange", null, null]]

        const expectedOutput = 'orange'

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalDown(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no winning diagonal down combinations on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, "purple", "orange", "orange", "orange", null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalDown(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })

    test("it returns null when there are no pieces on the board", () => {

        // Arrange
        let inputBoard =[[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]

        const expectedOutput = ''

        // Act
        const actualOutput = AcademyModule.checkWinnerDiagonalDown(inputBoard)

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput)
    })
})
