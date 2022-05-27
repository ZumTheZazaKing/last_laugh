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
    homeMenu:{
        textAlign:"center",
        padding:"10px"
    },
    button:{
        border:"none",
        outline:"none",
        borderRadius:"5px",
        padding:"5px 10px",
        fontSize:"20px",
        cursor:"pointer",
        transition:"all 0.3s ease",
        ":hover":{
            transform:"scale(1.2)",
        }
    },
    twoPlayers:{color:"green"},
    tutorial:{color:"orange"},
    toggleTheme:{
        padding:"10px",
        position:"absolute",
        top:"0",
        left:"0",
        cursor:"pointer"
    }
})