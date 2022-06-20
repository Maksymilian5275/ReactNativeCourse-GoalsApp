import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(!modalIsVisible);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        startAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    color="#475496"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    onAddGoal={addGoalHandler}
                    onCancel={startAddGoalHandler}
                    visible={modalIsVisible}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            itemData.index;
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "#CFD4FA",
    },
    goalsContainer: {
        flex: 5,
    },
});
