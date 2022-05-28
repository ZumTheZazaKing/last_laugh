import { StyleSheet } from "aphrodite";

export const IngameStyles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    board:{
        padding:"1px",
        width:"300px",
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        "@media (max-width: 600px)":{
            width:"80%",
        }
    },
    cell:{
        border:"2px solid grey",
        width:"60px",
        height:"60px",
        cursor:"pointer"
    },
    button:{
        fontSize:"20px",
        padding:"5px 10px",
        border:"none",
        outline:"none",
        cursor:"pointer",
        backgroundColor:"lightgrey",
        borderRadius:"5px",
        margin:"0 10px"
    }
});