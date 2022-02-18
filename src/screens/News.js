import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS, FONTS } from '../constants'
import { NewsList } from '../components';

const News = () => {
    return (
        <View style={styles.container}>
            <NewsList />
            <NewsList />
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4
    }
})