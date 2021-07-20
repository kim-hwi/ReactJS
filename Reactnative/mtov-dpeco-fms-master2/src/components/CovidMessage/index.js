import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CovidMessage = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>디피코 차량 트래킹</Text>
      <Text style={styles.text}>
        초소형 전기 차량 포트로(Potro) 차량 정보 추적
      </Text>

      <Text style={styles.learnMore}>더 알아보기</Text>
    </View>
  );
};

export default CovidMessage;
