import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Dimensions} from 'react-native';

import Axios from 'axios';
import Rupiah from 'rupiah-format';

import {LineChart} from 'react-native-chart-kit';

import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Content,
  Card,
  CardItem,
} from 'native-base';

const Revenue = ({navigation}) => {
  const [DailyIncome, setDailyIncome] = useState([]);
  const [WeeklyIncome, setWeeklyIncome] = useState([]);
  const [MonthlyIncome, setMonthlyIncome] = useState([]);
  const [YearlyIncome, setYearlyIncome] = useState([]);
  const [Data, setData] = useState({});

  function getDailyIncome() {
    Axios.get('http://52.91.238.76:3000/api/v1/history/daily')
      .then(result => {
        setDailyIncome(result.data.data);
      })
      .catch(error => {
        reject(error);
      });
  }

  function getWeeklyIncome() {
    Axios.get('http://52.91.238.76:3000/api/v1/history/weekly')
      .then(result => {
        setWeeklyIncome(result.data.data);
      })
      .catch(error => {
        reject(error);
      });
  }

  function getMonthlyIncome() {
    Axios.get('http://52.91.238.76:3000/api/v1/history/monthly')
      .then(result => {
        setMonthlyIncome(result.data.data);
      })
      .catch(error => {
        reject(error);
      });
  }

  function getYearlyIncome() {
    Axios.get('http://52.91.238.76:3000/api/v1/history/yearly')
      .then(result => {
        setYearlyIncome(result.data.data);
      })
      .catch(error => {
        reject(error);
      });
  }

  useEffect(() => {
    getDailyIncome();
    getWeeklyIncome();
    getMonthlyIncome();
    getYearlyIncome();
  }, []);

  let daily = [0];
  let dailyAmount = [];
  let order = [];
  DailyIncome.map(item => {
    daily.push(item.INCOME);
    dailyAmount.push(item.PRICE);
    order.push(item.QUANTITY);
  });

  let year = [0];
  YearlyIncome.map(item => {
    year.push(item.INCOME);
  });

  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{backgroundColor: '#ef5777'}}>
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
        <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
          <View>
            <LineChart
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={320}
              height={220}
              yAxisLabel={'Rp.'}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
            <Card style={styles.CardRevenue}>
              <CardItem
                style={{flex: 1, flexWrap: 'wrap', backgroundColor: '#05c46b'}}>
                <Body>
                  <Text style={{color: 'white'}}>Today's Income</Text>
                  <Text
                    style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                    {Rupiah.convert(daily[daily.length - 1])}
                  </Text>
                  <Text style={{color: 'white'}}>
                    {Math.round(
                      ((daily[daily.length - 1] - daily[daily.length - 2]) /
                        daily[daily.length - 2]) *
                        100,
                    )}
                    % Yesterday
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={styles.CardRevenue}>
              <CardItem
                style={{flex: 1, flexWrap: 'wrap', backgroundColor: '#4bcffa'}}>
                <Body>
                  <Text style={{color: 'white'}}>Today's Orders</Text>
                  <Text
                    style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                    {order[order.length - 1]}
                  </Text>
                  <Text style={{color: 'white'}}>
                    {Math.round(
                      ((order[order.length - 1] - order[order.length - 2]) /
                        order[order.length - 2]) *
                        100,
                    )}
                    % Yesterday
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </View>
          <View style={{flex: 1, padding: 10}}>
            <Card style={styles.CardRevenue}>
              <CardItem
                style={{flex: 1, flexWrap: 'wrap', backgroundColor: '#ffa801'}}>
                <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{color: 'white'}}>This Year's Income</Text>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    {Rupiah.convert(year[year.length - 1])}
                  </Text>
                  <Text style={{color: 'white'}}>
                    {Math.round(
                      ((year[year.length - 1] - year[year.length - 2]) /
                        year[year.length - 2]) *
                        100,
                    )}
                    % Last Year
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </View>
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
  CardRevenue: {
    flex: 1,
    height: 100,
  },
});

export default Revenue;
