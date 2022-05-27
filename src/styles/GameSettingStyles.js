import { StyleSheet } from "aphrodite";

export const GameSettingStyles = StyleSheet.create({
    container:{
        width:"100vw",
        height:"100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    selection:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    button:{
        backgroundColor:"transparent",
        fontSize:"20px",
        cursor:"pointer",
        transition:"all 0.3s ease",
        ":hover":{
            transform:"scale(1.2)",
        }
    }
})