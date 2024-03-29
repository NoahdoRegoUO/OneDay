import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 10,
        marginTop: 5,
    },
    slotContainer: {
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        width: "25%",
        backgroundColor: '#4f4f4f',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 5,
        marginLeft: 5,
        padding: 25,
    },
    emptyEventContainer: {
        paddingHorizontal: 10,
        position: "absolute",
        alignSelf: "flex-start",
        width: "70%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: 5,
        marginLeft: "28%",
        padding: 25,
    },
    modalView: {
        alignItems: "center",
        margin: 10,
        flexDirection: "column",
        marginTop: "12%",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalViewContainer: {
        flex: 1,
        flexDirection: "column",
    },
    modalButton: {
        width: 100,
        height: 40,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 5,
        elevation: 2,
    },
    clockSettingLeftButton: {
        width: 80,
        height: 35,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 5,
        elevation: 2,
    },
    clockSettingRightButton: {
        width: 80,
        height: 35,
        borderRadius: 30,
        padding: 10,
        marginLeft: 5,
        elevation: 2,
    },
    buttonContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 60,
    },
    buttonContainerSecondary: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: 'row',
        marginBottom: "4%",
        position: "absolute",
        alignSelf: "flex-end",
    },
    settingsContainer: {
        width: "100%",
        marginBottom: "4%",
    },
    colorPicker: {
        height: 80,
    },
    textInput: {
        height: "auto",
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        width: "90%",
    },
    timeDropdown: {
        margin: 5,
        borderRadius: 20,
        width: "80%",
        backgroundColor: "#4f4f4f",
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    normalText: {
        fontSize: 16,
        color: "#000",
        margin: 5,
    },
    modalTitleText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    modalSubtitleText: {
        fontSize: 20,
        margin: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    whiteBodyText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center"
    },
    timeSlotText12h: {
        fontSize: 16,
        fontWeight: 'bold',
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxHeight: 22,
        color: '#fff',
    },
    timeSlotText24h: {
        fontSize: 22,
        fontWeight: 'bold',
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: '#fff',
    },
    timeEventText: {
        fontSize: 16,
        fontWeight: 'bold',
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: '#fff',
    },
    settingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
        alignSelf: "flex-start",
    },
    settingsSwitch: {
        alignSelf: "flex-end",
        position: "absolute",
    },
    settingsIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        alignSelf: "flex-start",
        left: 20,
    },
    detailsIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        alignSelf: "flex-start",
        left: 75,
    },
    addIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        alignSelf: "flex-end",
        right: 20,
    },
    deleteIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        alignSelf: "flex-end",
        right: 75,
    },
    closeIcon: {
        width: 30,
        height: 30,
        position: "absolute",
        alignSelf: "flex-end",
        top: 10,
        right: 10,
    },
    linkedInIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
    },
    githubIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
    },
    extraSpace: {
        marginVertical: "3%",
    },
});