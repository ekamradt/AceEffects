import {React, StyleSheet, View} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";

//export type QTypeList = QuestionType[]

const QuestionTypeShort = (props) => {

  console.log("********************************************** QTShort 001");
  const qType = props.type;
  if (qType) {
    console.log("********************************************** QTShort 002");
    return (
      <View>
        <Table style={styles.head}>
          {/*<Row data={["Something goes here"]} textStyle={styles.head}/>*/}
          <Row data={["code","version","description","directions"]} textStyle={styles.headText}/>
          <Row data={[qType.code,qType.version,qType.description,qType.directions]} textStyle={styles.text}/>
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
      No quesiton types to see here
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, justifyContent: 'center', backgroundColor: '#fff'},
  head: {height: 44, backgroundColor: 'darkblue'},
  headText: {fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white'},
  text: {margin: 6, fontSize: 16, fontWeight: 'bold', textAlign: 'center'},
})

export default QuestionTypeShort;