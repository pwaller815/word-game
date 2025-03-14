const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--background");
const boardColor = getComputedStyle(document.documentElement).getPropertyValue("--board");

const styles = {
    // Header
    header: {
        padding: "1rem 3rem",
        display: "flex",
        maxHeight: "10vh",
        maxWidth: "100vw",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1111",
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",
    },
    // Main Menu
    mainMenu: {
        padding: "3rem",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "12rem",
        background: "blue",
    },
    mainMenuTitle: {
        fontSize: "5rem",
        height: "10%",
    },
    mainMenuContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
    },
    mainMenuBtn: {
        width: "9rem",
        height: "3rem",
        borderRadius: "15px"
    },
    // Game
    board: {
        padding: "3vh",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5vh",
        background: backgroundColor,
    },
    currentStringContainer: {
        height: "1rem",
        minWidth: "4rem",
    },
    currentString: {
        fontSize: "max(2vw, 2rem)",
        color: "#d8f3dc",
    },
    gridBoard: {
        borderRadius: "1rem",
        background: boardColor,
        padding: "0.7vw",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "max(0.7vw, 0.6rem)",
        cursor: "pointer",
        width: "min(36%, 650px)",
        minWidth: "450px",
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.5rem",
        fontSize: "max(4vw, 3rem)",
        color: "#d8f3dc",
        border: "max(0.4vw, 0.4rem) " + backgroundColor,
        userSelect: "none",
        cursor: "pointer",
        aspectRatio: "1 / 1",
        width: "100%",
    },
}

export default styles;