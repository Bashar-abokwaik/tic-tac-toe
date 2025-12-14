export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        // iterate over each row
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              // iterate over each square in the row
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)} // notify parent of the selected square
                  disabled={playerSymbol !== null} // disable if already selected
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
