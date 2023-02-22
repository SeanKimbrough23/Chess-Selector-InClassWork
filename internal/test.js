/**
 * SUPER SECRET TESTING FILE
 * -------------------------
 * 
 * This is not the file you are looking for.
 * You should be writing code in assignment.js
 * 
 * Please do not look at or modify this file.
 * 
 * We won't be mad if you do, just disappointed... 😞
 */




















/**
 * Hey... I see you scrolling. 
 * 
 * Stop now, before you do something you might regret later 😳
 */


















$(document).ready(runTest);


/**
 * The test configuration
 * Each item includes the assignment function to test
 * and the expected return value.
 * 
 * So for a function in assignment.js like:
 * 
 *      // Return all the pawns on the chess board
 *      function getPawns() {
 * 
 *      }
 * 
 * The test config would look like:
 * 
 *      [getPawns, $('.pawn')]
 */
function getTestConfiguration() {
    return [
        // Example
        [kings, $('.king')],

        // Select by element name
        [chessTable, $('table')],
        [heading, $('h1')],
        [links, $('a')],

        // Select by id
        [square3f, $('#square-3-f')],
        [square2g, $('#square-2-g')],

        // Select by class
        [whitePieces, $('.white')],
        [blackPieces, $('.black')],
        [pawns, $('.pawn')],
        [rooks, $('.rook')],
        [columnB, $('.column-b')],

        // Select by multiple classes
        [blackQueen, $('.black.queen')],
        [whiteKnights, $('.white.knight')],
        [pawnsInColumnD, $('.pawn.column-d')],


        // Multiple selectors
        [blackKingAndWhitePawns, $('.black.king, .white.pawn')],
        [whiteBishopsAndBlackKnights, $('.white.bishop, .black.knight')],
        [pawnsInColumnDAndE, $('.pawn.column-d, .pawn.column-e')],

        // Stretch: :not()
        [everySquareExcept2E, $('td:not(#square-2-e)'), true],
    ];
}

/**
 * Execute a function, and see if the return value
 * matches the expected jQuery object.
 * 
 * 
 */
function executeTest(fn, expected, stretch) {
    let isCorrect;
    let actual;
    let error;

    try {
        // Call the function
        // It should return a jquery object
        actual = fn();

        isCorrect = (
            // jQuery fn to test that two elements are equal
            actual?.is(expected) &&
            // ...but it only sort of works:
            // it will return `true` if one is a subset of the other.
            // So we need to also check that they are the same length 
            actual.length === expected.length
        )
    }
    catch (err) {
        // If the function fails, log the result, and mark as incorrect
        // `actual` will be undefined
        console.error(`❌ ${fn.name}(): \n${err}`);
        error = err;
        isCorrect = false;
    }

    // Render the result
    renderResult({
        fnName: fn.name,
        isCorrect,
        expected,
        actual,
        error,
        stretch,
    });
}

/**
 * Render the results of a single test execution
 */
function renderResult({ fnName, isCorrect, error, expected, actual, stretch }) {
    // Render the result list item
    let resultItem = $(`
        <li>
            <span>
                ${stretch ? 'STRETCH' : 'BASE'}
            </span>
            <span class="title">
                ${isCorrect ? '✅' : '❌'} ${fnName}()
            </span>

            <div class="expected-btn">Expected</div>

            ${isCorrect ? '' : `
                <div class="actual-btn">
                    ${actual ? 'Actual' : error ? 'Error (see console)' : 'Incomplete'}
                </div>
            `}
        </li>
    `);
    $('#results').append(resultItem);

    // Hover effect on "Expected" button
    // Add CSS to show green square over the expected elements
    resultItem.find('.expected-btn')
        .hover(
            () => expected.addClass('expected'),
            () => expected.removeClass('expected')
        );

    // Hover effect on "Actual" button
    // Add CSS to show red square over the actual elements
    resultItem.find('.actual-btn')
        .hover(
            () => actual?.addClass && actual.addClass('actual'),
            () => actual?.removeClass && actual.removeClass('actual')
        );
}

/**
 * Main function
 * Run tests, and render the results
 */
function runTest() {
    let tests = getTestConfiguration();

    for (let [fn, expected, stretch] of tests) {
        executeTest(fn, expected, stretch);
    }
}