import {React, StyleSheet, Text, View} from "react-native";
import axios, {AxiosResponse} from "axios";
import {useEffect, useState} from "react";
import {QuestionType} from "../interfaces/QuestionType.ts";
import {Row, Table} from "react-native-table-component";

//export type QTypeList = QuestionType[]

const QuestionTypeReport = () => {
  console.log("********************************************** 111 000");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  // state = {
  //   data: {'activity': 'Loading ...'}
  // };

  useEffect(() => {
    console.log("********************************************** 111 001");
    console.log("********************************************** 000");
    try {
      //const API_URL = "http://localhost:3000/question_type";

      console.log("********************************************** 001");

      //const response = await axios<QuestionType[]>.get(API_URL);
      //axios.get<Questions>(API_URL)

      // const response = axios.get<Questions>("http://localhost:3000/question_type");
      // console.log("********************************************** 002(a)");
      // console.log(response.data);
      // console.log("********************************************** 002(b)");
      // setData(response.data);
      //
      // axios.get<QuestionType>("http://localhost:3000/question_type")
      //   .then((response) => {
      //     console.log("********************************************** 002(a)");
      //     console.log(response.data);
      //     console.log("********************************************** 002(b)");
      //     setIsLoading(response.data);
      //   });

      const loadUserDetail = async () => {
        const axiosResponse: AxiosResponse<QuestionType[]> = await axios.get("http://localhost:3000/question_type");
        setData(axiosResponse.data);
        setIsLoading(false);
      };

      loadUserDetail();

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }, []);


  if (data && data.length > 0) {
    return (
      // <View style={styles.container}>
      <View>
        <Table style={styles.head}>
          {/*<Row data={["Something goes here"]} textStyle={styles.head}/>*/}
          <Row data={["code", "version", "description", "directions"]} textStyle={styles.headText}/>
          {data.map((qType) => (
            <Row data={[qType.code, qType.version, qType.description, qType.directions]} textStyle={styles.text}/>
          ))}
          {/*<Row data={qType.code}/>*/}
          {/*<Row data={qType.version}/>*/}
          {/*<Row data={qType.description}/>*/}
          {/*<Row data={qType.directions}/>*/}
        </Table>
      </View>
    );
  }
  return (
    <View>
      <Text> Nothing to see here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#fff'},
  head: {height: 44, backgroundColor: 'darkblue'},
  headText: {fontSize: 10, fontWeight: 'bold', textAlign: 'center', color: 'white'},
  text: {margin: 6, fontSize: 10, fontWeight: 'bold', textAlign: 'center'},
})

export default QuestionTypeReport;