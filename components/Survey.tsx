import {Dimensions, Text, View} from "react-native";
import {useState} from "react";
import {QuestionList} from "../utils/QuestionReader";
import SurveyQuestion from "./SurveyQuestion";


const Survey = () => {

    const minSliderValue = 1;
    const midSliderValue = 3;
    const maxSliderValue = 5;

    const windowWidth = Dimensions.get('window').width;
    const screenWidth = Dimensions.get('screen').width;

    const sliderWidth = screenWidth / 10;

    const [sliderValue, setSliderValue] = useState(3);
    const stepSize = sliderWidth / 4;
    const leftLabel = ((sliderValue - 1) * stepSize);

    const questionList = QuestionList;
    const question = questionList.question_types[0];
    const firstQuestion = question.questions[0]

    return (
        <View>
            <Text> Questions </Text>
            <SurveyQuestion
                question={firstQuestion}
                slider_width={sliderWidth}
                minValue={minSliderValue}
                maxValue={maxSliderValue}
            />
        </View>
    );
}

export default Survey;