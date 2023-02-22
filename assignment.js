/**
 * Practice your jQuery selector skills
 * by finding items on the chess board!
 * 
 * Each function should return a jQuery object.
 * Open index.html in your browser, to test your code.
 * 
 * Use the Chrome Elements panel to see what elements 
 * are available on the DOM
 * 
 * See https://www.w3schools.com/jquery/jquery_ref_selectors.asp
 * for a full list of jQuery selectors
 * 
 * See the README.md for the names and symbols of each chess piece
 */

// Example: Select all the kings
function kings() {
    // Kings all have a class="king" attribute
    // The "." selector selects elements by class name
    return $('.king');
}


// Select the entire chess <table> element
function chessTable() {
    return $('table'); // select whole table
}

// Select the "jQuery Selector Chess" heading
function heading() {
    return $('h1'); // select just the title 
}

// Select all links on the page
function links() {
    return $('a'); // select just the links at the bottom of page
}

// Select square 3f
function square3f() {
    return $('#square-3-f'); // select only square 3f
}

// Select square 2g
function square2g() {
    return $('#square-2-g'); // select only square 2g
}

// Select all white chess pieces
function whitePieces() {
    return $('.white'); // select only the white chess pieces
}

// Select all black chess pieces
function blackPieces() {
    return $('.black'); // select only the black chess pieces
}

// Selects all the pawns
function pawns() {
    return $('.pawn'); // select all pawns on the board
}

// Select all the rooks (aka "castles")
function rooks() {
    return $('.rook'); // select all the rooks
}

// Select all the squares in column b
function columnB() {
    return $('.column-b'); // select only pieces in coloumn  b
}

// Select the black queen
function blackQueen() {
    return $('.black.queen'); // select the black queen
}

// Select all white knights (aka "horseys")
function whiteKnights() {
    return $('.white.knight'); // select the White Knight
}

// Select all pawns in column d
function pawnsInColumnD() {
    return $('.pawn.column-d'); // select only the pawns in coloumn D
}

// Select the black king, and also all of the white pawns
function blackKingAndWhitePawns() {  
    return $('.white.pawn,.black.king'); // selecting 2 different elements (use the comma to separate)
}

// Select all the white bishops, and also the black knights
function whiteBishopsAndBlackKnights() {
    return $('.white.bishop,.black.knight'); //electing 2 different elements (use the comma to separate)
}

// Select every pawn that is in column d
// and every pawn that is in column e
function pawnsInColumnDAndE() {
    return $('.pawn.column-d,.pawn.column-e'); // electing 2 different elements (use the comma to separate)
}

// STRETCH: Select every square on the table
// except square 2e
function everySquareExcept2E() {
    return $('td').not('#square-2-e'); // selecting the entire board with the td element, then using .not to exlcude square -2-e
}
