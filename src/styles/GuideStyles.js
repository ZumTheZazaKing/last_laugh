import { StyleSheet } from "aphrodite";

export const GuideStyles = StyleSheet.create({
    container: {
        width:"100vw",
        height:"100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:"center",
        padding:"10px"
    },
    back:{
        position:"fixed",
        top:"0",
        left:"0",
        cursor:"pointer",
        padding:"20px"
    },
    button:{
        margin:"10px 0",
        fontSize:"18px",
        cursor:"pointer",
        transition:"all 0.3s ease-in-out",
        ":hover":{
            transform:"scale(1.2)"
        }
    }
})