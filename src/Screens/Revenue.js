import React from 'react';
import { StyleSheet, View, Alert, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit'

import aqua from '../Assets/Img/aqua.jpg'

import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail,
  Content,
  Card,
  CardItem
} from 'native-base';

const Revenue = ({ navigation }) => {

  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{ backgroundColor: '#ef5777' }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Chart Revenue</Title>
        </Body>
      </Header>
      <Content>
        <View style={{ flex: 1, padding: 20, alignItems: 'center', backgroundColor: 'blue' }}>
          <View>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }]
              }}
              width={320}
              height={220}
              yAxisLabel={'Rp.'}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            ></LineChart>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
          <Card style={{ flex: 1 }}>
            <CardItem cardBody>
              <Text>Tes</Text>
            </CardItem>
          </Card>
          <Card style={{ flex: 1 }}>
            <CardItem cardBody>
              <Text>Tes</Text>
            </CardItem>
          </Card>
        </View>
        <View>
          <Card style={{ flex: 1 }}>
            <CardItem cardBody>
              <Text>Tes</Text>
            </CardItem>
          </Card>
        </View>
      </Content>
    </>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: '#ef5777',
  },
});

export default Revenue;
