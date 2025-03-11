import React from 'react';
import styles from '../assets/styles/styles';

function Header() {
    return (  
        <header style={styles.header}>
            <div style={styles.headerContainer}>
                <p>Logo</p>
                <h1>the BIG one</h1>
            </div>
            <div>
                <p>Account</p>
            </div>
        </header>
    );
}

export default Header;
