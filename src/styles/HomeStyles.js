import { StyleSheet } from "aphrodite";

export const HomeStyles = StyleSheet.create({
    container: {
        width:"100vw",
        height:"100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        transition:"all 0.5s ease-in-out",
    },
    nightMode:{
        color:"#fff",
        backgroundColor:"#363636"
    },
    homeMenu:{
        textAlign:"center",
        padding:"10px"
    },
    button:{
        border:"none",
        outline:"none",
        backgroundColor:"lightgrey",
        borderRadius:"5px",
        padding:"5px 10px",
        fontSize:"16px",
        cursor:"pointer",
    },
    twoPlayers:{backgroundColor:"lightblue"},
    tutorial:{backgroundColor:"orange"},
    toggleTheme:{
        padding:"10px",
        position:"absolute",
        top:"0",
        left:"0",
        cursor:"pointer"
    }
})