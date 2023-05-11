import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({route, navigation}) => {
    const {state} = useContext(Context);
    const blogPostID = route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === blogPostID);

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        margin: 8,
    },
    content: {
        fontSize: 16,
        margin: 10,
    }
});

export default ShowScreen;
