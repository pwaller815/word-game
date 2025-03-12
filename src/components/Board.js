import React from "react";
import styles from "../assets/styles/styles";
import { useEffect, useState } from "react";

function Board() {
  const length = 3;
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    function printBoards(characters) {
      for (let i = 0; i < length; i++) {
        console.log("BOARD #" + i);
        let index = 0;
        for (let j = 0; j < 5; j++) {
          console.log(
            characters[i][index] +
              " " +
              characters[i][++index] +
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

    function generateBoards() {
      let characters = [];
      for (let i = 0; i < length; i++) {
        characters[i] = [];
        for (let j = 0; j < 25; j++) {
          let randomChar = Math.floor(Math.random() * 26) + 65;
          characters[i][j] = String.fromCharCode(randomChar);
        }
      }
      return characters;
    }

    const newCharacters = generateBoards();
    setCharacters(newCharacters);
    printBoards(newCharacters);
  }, []);

  return (
    <div style={styles.board}>
      <div style={styles.gridBoard}>
        {characters[0] ? (
          characters[0].map((character, index) => {
            return <div key={index} style={styles.gridItem}>{character}</div>;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Board;
