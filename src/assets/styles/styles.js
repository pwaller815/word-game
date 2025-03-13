const styles = {
    // Header
    header: {
        padding: "1rem 3rem",
        display: "flex",
        maxHeight: "15vh",
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
        height: "85vh",
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
        padding: "3rem",
        display: "flex",
        height: "85vh",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "12rem",
        background: "grey",
    },
    gridBoard: {
        display: "grid",
        gridTemplateColumns: "5rem 5rem 5rem 5rem",
    },
    gridItem: {
        fontSize: "5rem",
        alignText: "center",
        border: "1rem solid black",
    },
}

export default styles;