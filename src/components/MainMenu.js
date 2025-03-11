import React from 'react';
import { Link } from "react-router-dom";
import styles from '../assets/styles/styles';

function MainMenu() {
    return (
        <div style={styles.mainMenu}>
            <div style={styles.mainMenuTitle}>
                <p>the BIG one</p> 
            </div>
            <div style={styles.mainMenuContainer}>
                <Link to="/options"><button style={styles.mainMenuBtn}>Options</button></Link>
                <Link to="/game"><button style={styles.mainMenuBtn}>Start Game</button></Link>
            </div>
        </div>
    );
}

export default MainMenu;