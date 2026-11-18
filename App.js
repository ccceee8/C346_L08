
import React, {useState} from 'react';
import {ScrollView, Text, Button, Alert} from 'react-native';
import Car from './Components/cars';

const AllCars = () => {

    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const checkAnswers = () => {
        let score = 0;

        if (answer1 === 'Honda') {score++;}

        if (answer2 === 'Type R FL5') {score++;}

        if (answer3 === 'HRV') {score++;}

        Alert.alert(
            '',
            'You have ' + score + ' correct answers!'
        );
    };

    return (
        <ScrollView>
            <Car
                icon_name="car"
                icon_color="black"
                title="Welcome to L06 No Price Quiz."
                question_num="Question 1:"
                question="What is this logo called?"
                poster={{
                    uri: 'https://www.bing.com/th/id/OIP.aZbur7aIgmLJKK_o2_F1MwHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2'
                }}
                options={['Mercedes', 'Honda', 'Audi']}
                selectedValue={answer1}
                onValueChange={setAnswer1}
            />

            <Car
                question_num="Question 2:"
                question="What is the name of the car?"
                poster={{uri:'https://d1hv7ee95zft1i.cloudfront.net/custom/blog-post/original/honda-civic-type-r-rear-640fcf02b9d12.jpg'}}
                options={['Type R FK8', 'Type R EK9', 'Type R FL5']}
                selectedValue={answer2}
                onValueChange={setAnswer2}
            />

            <Car
                question_num="Question 3:"
                question="What is the name of the car?"
                poster={{uri:'https://new-staging.honda.com.sg/images/cars/2024_HR-V/NEW_HR-V_Home_Model_Image_-_732x455px.png'}}
                options={['Civic', 'Accord', 'HRV']}
                selectedValue={answer3}
                onValueChange={setAnswer3}
            />

            <Button
                title="SUBMIT ANSWERS"
                onPress={checkAnswers}
            />
        </ScrollView>
    );
};

export default AllCars;
