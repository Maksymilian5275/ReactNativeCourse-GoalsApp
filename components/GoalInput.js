import { useState } from "react";
import {
    Button,
    View,
    TextInput,
    StyleSheet,
    Modal,
    Image,
} from "react-native";

import arrowTarget from "../assets/images/goal.png";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style = {styles.image} source={arrowTarget} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add Goal"
                            onPress={addGoalHandler}
                            color="#475496"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color="#475496"
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: "#475496",
    },
    image: {
        width:100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#CFD4FA",
        backgroundColor:"#CFD4FA",
        width: "100%",
        padding: 8,
        borderRadius: 6,
    },
    buttonContainer: {
        width: "70%",
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        width: "40%",
        marginHorizontal: 8,
    },
});
