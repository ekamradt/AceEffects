import {Text, View} from "react-native";
import Slider from "@react-native-community/slider";
import {useState} from "react";


const SurveyQuestion = (props: any) => {
    const question = props.question;
    const sliderWidth = props.sliderWidth;
    const minValue = props.minValue;
    const maxValue = props.maxValue;

    const [sliderValue, setSliderValue] = useState(3);

    const stepSize = sliderWidth / 4;
    const leftLabel = ((sliderValue-1) * stepSize);

    return (
        <View>
            <Text>{question.minDesc}</Text>
            <Slider
                style={{width: sliderWidth, height: 40}}
                minimumValue={minValue}
                maximumValue={maxValue}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                step={1}
                onValueChange={val => setSliderValue(val)}
                value={sliderValue}
            />
            <Text>{question.maxDesc}</Text>
            <Text style={{width: 500, textAlign: 'auto', left: leftLabel}}>
                X:{sliderValue} : {leftLabel} : {stepSize}
            </Text>
            <Text>Value: {sliderValue}</Text>
        </View>
    );
}

export default SurveyQuestion;