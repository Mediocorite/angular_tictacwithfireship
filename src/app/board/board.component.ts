import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // Properties for the board mechanics
    squares: any[];
    xIsNext: boolean;
    winner: string;

  constructor() { }

  ngOnInit(): void {
    // Creates a new game at startup
      this.newGame();
  }
  // Defines the empty properties at the start of the game
    newGame(){
      this.squares = Array(9).fill(null);
      this.winner = null;
      this.xIsNext = true;
    }
  // get player() : Determines whose turn it is, via the Angular Getter
    get player(){
      if (this.xIsNext){
        return 'X'
      } else {
        return 'O';
      }
    }
  // makeMove() : gives functionality and lets user make a move
  makeMove(index: number){
    if(!this.squares[index]){
      // Update our squares array
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
    
    this.winner = this.calculateWinner();
  }
  // calculateWinner : Provides the logic for winning the game
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
