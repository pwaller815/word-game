import React from "react";
import styles from "../assets/styles/styles";
import { useEffect, useState } from "react";

function Board() {
  const length = 3;
  const [characters, setCharacters] = useState([]);
  const [currentBoard, setCurrentBoard] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [activeDiv, setActiveDiv] = useState(null);
  const [currentString, setCurrentString] = useState({
    word: "",
    indexes: [],
  });

  const handleMouseDown = (e, index) => {
    setIsDragging(true);
    setCurrentString((prevState) => ({
      word: characters[currentBoard][index],
      indexes: [index],
    }));
    setActiveDiv(index);
    document.querySelector("#div-" + index).style.backgroundColor = "#95d5b2";
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      characters[currentBoard].forEach((char, index) => {
        const divElement = document.getElementById(`div-${index}`);
        const rect = divElement.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          if (isNeighbor(index) && !currentString.indexes.includes(index)) {
            setActiveDiv(index);
            setCurrentString((prevState) => ({
              word: prevState.word + char,
              indexes: [...prevState.indexes, index],
            }));
            document.querySelector("#div-" + index).style.background = "#95d5b2";
          }
        }
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    currentString.indexes.forEach((index) => {
      document.querySelector("#div-" + index).style.background = "#40916c";
    });

    setCurrentString({
      word: "",
      indexes: [],
    });
  };

  function isNeighbor(index) {
    const rowDiff = Math.abs(Math.floor(activeDiv / 4) - Math.floor(index / 4));
    const colDiff = Math.abs((activeDiv % 4) - (index % 4));

    return rowDiff <= 1 && colDiff <= 1 && rowDiff + colDiff > 0;
  }

  function determinePoints(word) {
    const length = word.length;
    if (length === 3) {
      return 1;
    } else if (length === 4) {
      return 2;
    } else if (length === 5) {
      return 3;
    } else if (length === 6) {
      return 5;
    } else if (length >= 7) {
      return 8;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    const die = [
      ["S", "R", "E", "L", "A", "C"],
      ["D", "P", "A", "C", "E", "M"],
      ["Qu", "B", "A", "O", "J", "M"],
      ["D", "U", "T", "O", "K", "N"],
      ["O", "M", "H", "R", "S", "A"],
      ["E", "I", "F", "E", "H", "Y"],
      ["B", "R", "I", "F", "O", "X"],
      ["R", "L", "U", "W", "I", "G"],
      ["N", "S", "O", "W", "E", "D"],
      ["Y", "L", "I", "B", "A", "T"],
      ["T", "N", "I", "G", "E", "V"],
      ["T", "A", "C", "I", "T", "O"],
      ["P", "S", "U", "T", "E", "L"],
      ["E", "P", "I", "S", "H", "N"],
      ["Y", "K", "U", "L", "E", "G"],
      ["N", "Z", "E", "V", "A", "D"],
    ];

    function printBoards(characters) {
      for (let i = 0; i < length; i++) {
        console.log("BOARD #" + i);
        let index = 0;
        for (let j = 0; j < 4; j++) {
          console.log(
            characters[i][index] +
              " " +
              characters[i][++index] +
              " " +
              characters[i][++index] +
              " " +
              characters[i][++index]
          );
          index++;
        }
        console.log("\n");
      }
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function generateBoards() {
      let characters = [];
      let shuffled = structuredClone(die);
      for (let i = 0; i < length; i++) {
        characters[i] = [];
        shuffleArray(shuffled);
        for (let j = 0; j < 16; j++) {
          let character = shuffled[j][Math.floor(Math.random() * 6)];
          characters[i][j] = character;
        }
      }
      return characters;
    }

    function timer() {
      let currentBoard = 0;

      const interval = setInterval(() => {
        setCurrentBoard(currentBoard + 1);
        currentBoard++;
        console.log("New board: " + currentBoard);
      }, 5000);

      setTimeout(() => {
        clearInterval(interval);
      }, (length - 1) * 5000);
    }

    const newCharacters = generateBoards();
    setCharacters(newCharacters);
    // timer();
    printBoards(newCharacters);
  }, []);

  return (
    <div style={styles.board} onMouseUp={handleMouseUp}>
      <div style={styles.currentStringContainer}>
        <div style={styles.currentString}>{currentString.word}</div>
      </div>
      <div onMouseMove={handleMouseMove} style={styles.gridBoard} className="gridBoard">
        {characters[currentBoard] ? (
          characters[currentBoard].map((character, index) => {
            return (
              <div
                key={index}
                id={`div-${index}`}
                onMouseDown={(e) => handleMouseDown(e, index)}
                style={styles.gridItem}
              >
                {character}
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Board;
