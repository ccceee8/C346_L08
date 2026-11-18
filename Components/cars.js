import React, {useRef, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        padding: 5,
        backgroundColor: 'white',
    },

    questionBox: {
        backgroundColor: 'steelblue',
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        marginTop: 5,
    },

    questionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    image: {
        width: '100%',
        height: 300,
        borderWidth: 1,
        borderColor: 'black',
    },

    pickerBox: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'monospace',
    },
});

const Car = ({
                 icon_name,
                 icon_color,
                 title,
                 question_num,
                 question,
                 poster,
                 options,
                 selectedValue,
                 onValueChange
             }) => {
    const bounce = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(bounce, {
                    toValue: -15,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(bounce, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, [bounce]);
    return (
        <View>
            <Text></Text>

            {title && (
                <Animated.Text
                    style={[styles.title, {fontSize: 30}, {transform: [{translateY: bounce}]}]}>
                    <FontAwesome6
                        name={icon_name}
                        size={30}
                        color={icon_color}
                    />
                    {' '}{title}
                </Animated.Text>
            )}

            <View style={styles.card}>
                <Text style={{fontSize: 25}}>
                {question_num}
                </Text>

                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>
                        {question}
                    </Text>
                </View>

                <Image
                    source={poster}
                    style={styles.image}
                    resizeMode="cover"
                />

                <View style={styles.pickerBox}>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={onValueChange}
                    >
                        <Picker.Item
                            label="Select an item..."
                            value=""
                        />
                        {options.map((item, index) => (
                            <Picker.Item
                                key={index}
                                label={item}
                                value={item}
                            />
                        ))}
                    </Picker>
                </View>
            </View>
        </View>
    );
};
export default Car;
