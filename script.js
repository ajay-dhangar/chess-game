class Rook {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType =  "rook"; 
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7) {
                if (board[y][x + i].piece == null) {
                    board[y][x + i].square.style.background = "orange";
                    board[y][x + i].square.classList.add("canMove");
                } else if (board[y][x + i].piece.color != this.color) {
                    board[y][x + i].square.style.background = "orange";
                    board[y][x + i].square.classList.add("canMove");
                    break;
                } else if (board[y][x + i].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0) {
                if (board[y][x - i].piece == null) {
                    board[y][x - i].square.style.background = "orange";
                    board[y][x - i].square.classList.add("canMove");
                } else if (board[y][x - i].piece.color != this.color) {
                    board[y][x - i].square.style.background = "orange";
                    board[y][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y][x - i].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (y + i <= 7) {
                if (board[y + i][x].piece == null) {
                    board[y + i][x].square.style.background = "orange";
                    board[y + i][x].square.classList.add("canMove");
                } else if (board[y + i][x].piece.color != this.color) {
                    board[y + i][x].square.style.background = "orange";
                    board[y + i][x].square.classList.add("canMove");
                    break;
                } else if (board[y + i][x].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (y - i >= 0) {
                if (board[y - i][x].piece == null) {
                    board[y - i][x].square.style.background = "orange";
                    board[y - i][x].square.classList.add("canMove");
                } else if (board[y - i][x].piece.color != this.color) {
                    board[y - i][x].square.style.background = "orange";
                    board[y - i][x].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x].piece.color == this.color) {
                    break;
                }
            }
        }
    }
}

class Bishop {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType = "bishop";
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7 && y + i <= 7) {
                if (board[y + i][x + i].piece == null) {
                    board[y + i][x + i].square.style.background = "orange";
                    board[y + i][x + i].square.classList.add("canMove");
                } else if (board[y + i][x + i].piece.color != this.color){
                    board[y + i][x + i].square.style.background = "orange";
                    board[y + i][x + i].square.classList.add("canMove");
                    break;
                } else if(board[y + i][x + i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0 && y - i >= 0) {
                if (board[y - i][x - i].piece == null) {
                    board[y - i][x - i].square.style.background = "orange";
                    board[y - i][x - i].square.classList.add("canMove");
                } else if (board[y - i][x - i].piece.color != this.color) {
                    board[y - i][x - i].square.style.background = "orange";
                    board[y - i][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x - i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7 && y - i >= 0) {
                if (board[y - i][x + i].piece == null) {
                    board[y - i][x + i].square.style.background = "orange";
                    board[y - i][x + i].square.classList.add("canMove");
                } else if(board[y - i][x + i].piece.color != this.color) {
                    board[y - i][x + i].square.style.background = "orange";
                    board[y - i][x + i].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x + i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0 && y + i <= 7) {
                if (board[y + i][x - i].piece == null) {
                    board[y + i][x - i].square.style.background = "orange";
                    board[y + i][x - i].square.classList.add("canMove");
                } else if (board[y + i][x - i].piece.color != this.color) {
                    board[y + i][x - i].square.style.background = "orange";
                    board[y + i][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y + i][x - i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
    }
}

class Knight {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType = "knight";
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        if (y > 0 && x > 1) {
            if (board[y - 1][x - 2].piece == null || board[y - 1][x - 2].piece.color != this.color) {
                board[y - 1][x - 2].square.style.background = "orange";
                board[y - 1][x - 2].square.classList.add("canMove");
            }
        }
        if (y > 1 && x > 0) {
            if (board[y - 2][x - 1].piece == null || board[y - 2][x - 1].piece.color != this.color) {
                board[y - 2][x - 1].square.style.background = "orange";
                board[y - 2][x - 1].square.classList.add("canMove");
            }
        }
        if (y > 0 && x < 6) {
            if (board[y - 1][x + 2].piece == null || board[y - 1][x + 2].piece.color != this.color) {
                board[y - 1][x + 2].square.style.background = "orange";
                board[y - 1][x + 2].square.classList.add("canMove");
            }
        }
        if (y > 1 && x < 7) {
            if (board[y - 2][x + 1].piece == null || board[y - 2][x + 1].piece.color != this.color) {
                board[y - 2][x + 1].square.style.background = "orange";
                board[y - 2][x + 1].square.classList.add("canMove");
            }
        }
        if (y < 7 && x < 6) {
            if (board[y + 1][x + 2].piece == null || board[y + 1][x + 2].piece.color != this.color) {
                board[y + 1][x + 2].square.style.background = "orange";
                board[y + 1][x + 2].square.classList.add("canMove");
            }
        }
        if (y < 6 && x < 7) {
            if (board[y + 2][x + 1].piece == null || board[y + 2][x + 1].piece.color != this.color) {
                board[y + 2][x + 1].square.style.background = "orange";
                board[y + 2][x + 1].square.classList.add("canMove");
            }
        }
        if (y < 7 && x > 1) {
            if (board[y + 1][x - 2].piece == null || board[y + 1][x - 2].piece.color != this.color) {
                board[y + 1][x - 2].square.style.background = "orange";
                board[y + 1][x - 2].square.classList.add("canMove");
            }
        }
        if (y < 6 && x > 0) {
            if (board[y + 2][x - 1].piece == null || board[y + 2][x - 1].piece.color != this.color) {
                board[y + 2][x - 1].square.style.background = "orange";
                board[y + 2][x - 1].square.classList.add("canMove");
            }
        }
    }
}

class Queen {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType = "queen";
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7) {
                if (board[y][x + i].piece == null) {
                    board[y][x + i].square.style.background = "orange";
                    board[y][x + i].square.classList.add("canMove");
                } else if (board[y][x + i].piece.color != this.color) {
                    board[y][x + i].square.style.background = "orange";
                    board[y][x + i].square.classList.add("canMove");
                    break;
                } else if (board[y][x + i].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0) {
                if (board[y][x - i].piece == null) {
                    board[y][x - i].square.style.background = "orange";
                    board[y][x - i].square.classList.add("canMove");
                } else if (board[y][x - i].piece.color != this.color) {
                    board[y][x - i].square.style.background = "orange";
                    board[y][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y][x - i].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (y + i <= 7) {
                if (board[y + i][x].piece == null) {
                    board[y + i][x].square.style.background = "orange";
                    board[y + i][x].square.classList.add("canMove");
                } else if (board[y + i][x].piece.color != this.color) {
                    board[y + i][x].square.style.background = "orange";
                    board[y + i][x].square.classList.add("canMove");
                    break;
                } else if (board[y + i][x].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (y - i >= 0) {
                if (board[y - i][x].piece == null) {
                    board[y - i][x].square.style.background = "orange";
                    board[y - i][x].square.classList.add("canMove");
                } else if (board[y - i][x].piece.color != this.color) {
                    board[y - i][x].square.style.background = "orange";
                    board[y - i][x].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x].piece.color == this.color) {
                    break;
                }
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7 && y + i <= 7) {
                if (board[y + i][x + i].piece == null) {
                    board[y + i][x + i].square.style.background = "orange";
                    board[y + i][x + i].square.classList.add("canMove");
                } else if (board[y + i][x + i].piece.color != this.color){
                    board[y + i][x + i].square.style.background = "orange";
                    board[y + i][x + i].square.classList.add("canMove");
                    break;
                } else if(board[y + i][x + i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0 && y - i >= 0) {
                if (board[y - i][x - i].piece == null) {
                    board[y - i][x - i].square.style.background = "orange";
                    board[y - i][x - i].square.classList.add("canMove");
                } else if (board[y - i][x - i].piece.color != this.color) {
                    board[y - i][x - i].square.style.background = "orange";
                    board[y - i][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x - i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x + i <= 7 && y - i >= 0) {
                if (board[y - i][x + i].piece == null) {
                    board[y - i][x + i].square.style.background = "orange";
                    board[y - i][x + i].square.classList.add("canMove");
                } else if(board[y - i][x + i].piece.color != this.color) {
                    board[y - i][x + i].square.style.background = "orange";
                    board[y - i][x + i].square.classList.add("canMove");
                    break;
                } else if (board[y - i][x + i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
        for (let i = 1; i < 8; i++) {
            if (x - i >= 0 && y + i <= 7) {
                if (board[y + i][x - i].piece == null) {
                    board[y + i][x - i].square.style.background = "orange";
                    board[y + i][x - i].square.classList.add("canMove");
                } else if (board[y + i][x - i].piece.color != this.color) {
                    board[y + i][x - i].square.style.background = "orange";
                    board[y + i][x - i].square.classList.add("canMove");
                    break;
                } else if (board[y + i][x - i].piece.color == this.color) {
                    break;
                }
            } else {
                break;
            }
        }
    }
}

class King {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType = "king";
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        if (x > 0 && (board[y][x - 1].piece == null || board[y][x - 1].piece.color != this.color)) {
            board[y][x - 1].square.style.background = "orange";
            board[y][x - 1].square.classList.add("canMove");
        }
        if (x > 0 && y > 0 && (board[y - 1][x - 1].piece == null || board[y - 1][x - 1].piece.color != this.color)) {
            board[y - 1][x - 1].square.style.background = "orange";
            board[y - 1][x - 1].square.classList.add("canMove");
        }
        if (x < 7 && (board[y][x + 1].piece == null || board[y][x + 1].piece.color != this.color)) {
            board[y][x + 1].square.style.background = "orange";
            board[y][x + 1].square.classList.add("canMove");
        }
        if (x < 7 && y < 7 && (board[y + 1][x + 1].piece == null || board[y + 1][x + 1].piece.color != this.color)) {
            board[y + 1][x + 1].square.style.background = "orange";
            board[y + 1][x + 1].square.classList.add("canMove");
        }
        if (x < 7 && y > 0 && (board[y - 1][x + 1].piece == null || board[y - 1][x + 1].piece.color != this.color)) {
            board[y - 1][x + 1].square.style.background = "orange";
            board[y - 1][x + 1].square.classList.add("canMove");
        }
        if (x > 0 && y < 7 && (board[y + 1][x - 1].piece == null || board[y + 1][x - 1].piece.color != this.color)) {
            board[y + 1][x - 1].square.style.background = "orange";
            board[y + 1][x - 1].square.classList.add("canMove");
        }
        if (y > 0 && (board[y - 1][x].piece == null || board[y - 1][x].piece.color != this.color)) {
            board[y - 1][x].square.style.background = "orange";
            board[y - 1][x].square.classList.add("canMove");
        }
        if (y < 7 && (board[y + 1][x].piece == null || board[y + 1][x].piece.color != this.color)) {
            board[y + 1][x].square.style.background = "orange";
            board[y + 1][x].square.classList.add("canMove");
        }
    }
}

class Pawn {
    constructor(color, name, x, y) {
        this.color = color;
        this.pieceType = "pawn";
        this.x = x;
        this.y = y;
        this.name = name;
    }

    canMove() {
        var number;
        if (this.color == "white") {
            number = -1;
        } else {
            number = 1;
        }
        if (board[y + number][x].piece == null) {
            board[y + number][x].square.style.background = "orange";
            board[y + number][x].square.classList.add("canMove");

            if (board[y + (2 * number)][x].piece == null && ((this.y == 6 && this.color == "white") || (this.y == 1 && this.color == "black"))) {
                board[y + (number * 2)][x].square.style.background = "orange";
                board[y + (number * 2)][x].square.classList.add("canMove");
            }
        }
        if (x < 7) {
            if ((board[y + number][x + 1].piece != null && board[y + number][x + 1].piece.color != this.color)) {
                board[y + number][x + 1].square.style.background = "orange";
                board[y + number][x + 1].square.classList.add("canMove");
            }
        }
        if (x > 0) {
            if (board[y + number][x - 1].piece != null && board[y + number][x - 1].piece.color != this.color) {
                board[y + number][x - 1].square.style.background = "orange";
                board[y + number][x - 1].square.classList.add("canMove");
            }
        }
    }
}

var r1 = new Rook("black", "r1", 0, 0); 
var r2 = new Rook("black", "r2", 7, 0); 
var r3 = new Rook("white", "r3", 0, 7); 
var r4 = new Rook("white", "r4", 7, 7);

var kn1 = new Knight("black", "kn1", 1, 0);
var kn2 = new Knight("black", "kn2", 6, 0);
var kn3 = new Knight("white", "kn3", 1, 7);
var kn4 = new Knight("white", "kn4", 6, 7);

var b1 = new Bishop("black", "b1", 2, 0);
var b2 = new Bishop("black", "b2", 5, 0);
var b3 = new Bishop("white", "b3", 2, 7);
var b4 = new Bishop("white", "b4", 5, 7);

var q1 = new Queen("black", "q1", 3, 0);
var q2 = new Queen("white", "q2", 3, 7);

var k1 = new King("black", "k1", 4, 0);
var k2 = new King("white", "k2", 4, 7);

var p1 = new Pawn("black", "p1", 0, 1);
var p2 = new Pawn("black", "p2", 1, 1);
var p3 = new Pawn("black", "p3", 2, 1);
var p4 = new Pawn("black", "p4", 3, 1);
var p5 = new Pawn("black", "p5", 4, 1);
var p6 = new Pawn("black", "p6", 5, 1);
var p7 = new Pawn("black", "p7", 6, 1);
var p8 = new Pawn("black", "p8", 7, 1);

var p9 = new Pawn("white", "p9", 0, 6);
var p10 = new Pawn("white", "p10", 1, 6);
var p11 = new Pawn("white", "p11", 2, 6);
var p12 = new Pawn("white", "p12", 3, 6);
var p13 = new Pawn("white", "p13", 4, 6);
var p14 = new Pawn("white", "p14", 5, 6);
var p15 = new Pawn("white", "p15", 6, 6);
var p16 = new Pawn("white", "p16", 7, 6);

var pieces = [r1, r2, r3, r4, kn1, kn2, kn3, kn4, b1, b2, b3, b4, q1, q2, k1, k2, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p12, p13, p14, p15, p16];
var squares = document.getElementById("board").children;
var button = document.getElementById("btn");
var turn = document.getElementById("playerTurn");
var board;
//Connects each square of board to a piece
function makeBoard() {
    var row0 = [squares[0], squares[1], squares[2], squares[3], squares[4], squares[5], squares[6], squares[7]];
    var row1 = [squares[8], squares[9], squares[10], squares[11], squares[12], squares[13], squares[14], squares[15]];
    var row2 = [squares[16], squares[17], squares[18], squares[19], squares[20], squares[21], squares[22], squares[23]];
    var row3 = [squares[24], squares[25], squares[26], squares[27], squares[28], squares[29], squares[30], squares[31]];
    var row4 = [squares[32], squares[33], squares[34], squares[35], squares[36], squares[37], squares[38], squares[39]];
    var row5 = [squares[40], squares[41], squares[42], squares[43], squares[44], squares[45], squares[46], squares[47]];
    var row6 = [squares[48], squares[49], squares[50], squares[51], squares[52], squares[53], squares[54], squares[55]];
    var row7 = [squares[56], squares[57], squares[58], squares[59], squares[60], squares[61], squares[62], squares[63]];
    board = [row0, row1, row2, row3, row4, row5, row6, row7]; //2D array of board squares
    var temp;
    var z = 0;
    var num;

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            temp = board[r][c];
            for (let i = 0; i < pieces.length; i++) {
                if (pieces[i].x == c && pieces[i].y == r) {
                    z++;
                    num = i;
                }
            }
            if (z > 0) {
                board[r][c] = {square: temp, piece: pieces[num]}
            } else {
                board[r][c] = {square: temp, piece: null};
            }
            z = 0;
        }
    }
}

var x = 0;
var y = 0;
var thePiece;
var theSquare;
var theColor;
var white = "#cfb5b5";
var black = "#604d4d";
var colorMove = "white";
makeBoard();
currentState();
document.body.addEventListener("keydown", move)

function currentState() {
    if (board[y][x].square.className.substring(0,5) == "white") {
        theColor = white;
    } else if (board[y][x].square.className.substring(0,5) == "black") {
        theColor = black;
    }
    if (board[y][x].square.className.substring(6) == "canMove") {
        theColor = "orange";
    }
    board[y][x].square.style.background = "yellow";
}

function move(e) {
    board[y][x].square.style.background = theColor;
    if (e.key == "ArrowLeft") {
        if (x > 0) {
            x--;
            currentState();
        }
    } else if (e.key == "ArrowRight") {
        if (x < 7) {
            x++;
            currentState();
        }
    } else if (e.key == "ArrowDown") {
        if (y < 7) {
            y++;
            currentState();
        }
    } else if (e.key == "ArrowUp") {
        if (y > 0) {
            y--;
            currentState();
        }
    } else if (e.key == "Enter") {
        if (isSameColor(board[y][x].piece)) {
            thePiece = board[y][x].piece;
            theSquare = board[y][x].square;
            clearColors();
            theSquare.style.background = "blue";
            thePiece.canMove();
        } else if (board[y][x].square.getAttribute("class").substring(6) == "canMove") {
            board[y][x].square.innerHTML = theSquare.innerHTML;
            theSquare.innerHTML = "";
            board[thePiece.y][thePiece.x].piece = null;
            thePiece.x = x;
            thePiece.y = y;
            board[y][x].piece = thePiece;
            clearColors();
            clearClass();
            if (colorMove == "white") {
                colorMove = "black";
            } else {
                colorMove = "white";
            }
        }
    }
}

function isSameColor(p) {
    if (p != null) {
        if (colorMove == p.color) {
            return true;
        }
    }
    return false;
}

function clearColors() {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c].square.className.substring(0,5) == "white") {
                board[r][c].square.style.background = white;
            } else if (board[r][c].square.className.substring(0,5) == "black") {
                board[r][c].square.style.background = black;
            }
        }
    }
}

function clearClass() {
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            if (board[r][c].square.className.substring(0,5) == "white") {
                board[r][c].square.className = "white";
            }
            if (board[r][c].square.className.substring(0,5) == "black") {
                board[r][c].square.className = "black";
            }
        }
    }
}