import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import rgba from 'hex-to-rgba';
import Icon from 'react-native-vector-icons';
// check this lib for more options
import { CircularProgress } from 'react-native-circular-progress';

import { Block, Badge, Card, Text, Progress } from '../components';
import { theme, mocks } from '../constants';

export default class Rewards extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text
          style={[
            theme.fonts.header,
            { paddingLeft: theme.sizes.base },
          ]}
        >
          Rewards
        </Text>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={require('../assets/images/Icon/Back.png')}
            style={{ width: 20, height: 24, marginRight: theme.sizes.base }}
          />
        </TouchableOpacity>
      )
    }
  }

  renderMonthly() {
    return (
      <Card shadow style={{ paddingVertical: theme.sizes.padding }}>
        <Block>
          <Block center>
            <Text h1 primary spacing={1.7}>$25.86</Text>
            <Text spacing={0.7}>Total Monthly Rewards</Text>
          </Block>

          <Block color="gray3" style={styles.hLine} />

          <Block row>
            <Block center>
              <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>$4</Text>
              <Text body spacing={0.7}>Challenge</Text>
              <Text body spacing={0.7}>Credit</Text>
            </Block>

            <Block flex={false} color="gray3" style={styles.vLine} />

            <Block center>
              <Text size={20} spacing={0.6} primary style={{ marginBottom: 6 }}>$5.83</Text>
              <Text body spacing={0.7}>Driver</Text>
              <Text body spacing={0.7}>Discount</Text>
            </Block>
          </Block>
        </Block>
      </Card>
    )
  }

  renderRewards() {
    return (
      <Card shadow style={{ paddingVertical: theme.sizes.base * 2}}>
        <Block center>
          <CircularProgress
            size={214} 
            fill={85} 
            lineCap="round" 
            rotation={220}
            arcSweepAngle={280}
            width={theme.sizes.base}
            tintColor={theme.colors.primary} 
            backgroundColor={theme.colors.gray3}
            backgroundWidth={theme.sizes.base / 2}
          >
            {() => (
              <Block center middle>
                <Text h2 medium>8.1</Text>
                <Text h3 transform="uppercase">good</Text>
              </Block>
            )}
          </CircularProgress>
        </Block>

        <Block center>
          <Text title spacing={1} style={{marginVertical: 8}}>
            Driving Score
          </Text>
          <Text>
            <Text primary>42 </Text>
            <Text gray transform="uppercase">level</Text>
          </Text>
        </Block>

        <Block color="gray3" style={styles.hLine} />

        <Block row>
          <Block center flex={0.8}>
            <Text size={20} spacing={1} primary>48</Text>
            <Text spacing={0.7}>Trips</Text>
          </Block>
          
          <Block center flex={2}>
            <Text size={20} spacing={1} primary>109</Text>
            <Text spacing={0.7}>Hours</Text>
          </Block>

          <Block center flex={0.8}>
            <Text size={20} spacing={1} primary>5.87</Text>
            <Text spacing={0.7}>Miles</Text>
          </Block>
        </Block>

        <Block color="gray3" style={styles.hLine} />

        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between" style={{ paddingLeft: 6 }}>
            <Text body spacing={0.7}>Breaking</Text>
            <Text caption spacing={0.7}>8.4</Text>
          </Block>
          <Progress value={0.81} />
        </Block>
        
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between" style={{ paddingLeft: 6 }}>
            <Text body spacing={0.7}>Speeding</Text>
            <Text caption spacing={0.7}>9.7</Text>
          </Block>
          <Progress value={0.98} />
        </Block>

        <Block style={{ marginBottom: theme.sizes.base }}>
          <Block row space="between" style={{ paddingLeft: 6 }}>
            <Text body spacing={0.7}>Distracted Driving</Text>
            <Text caption spacing={0.7}>7.9</Text>
          </Block>
          <Progress endColor="#D37694" value={0.74} />
        </Block>

        <Block color="gray3" style={styles.hLine} />

        <Block row center space="between">
          <Text>Total Driver Discount</Text>
          <Text size={20} spacing={1} primary>$7.68</Text>
        </Block>
      </Card>
    )
  }

  renderChallenges() {
    return (
      <Block>
        <Block style={{
            marginTop: theme.sizes.base,
            marginBottom: theme.sizes.base,
            paddingHorizontal: theme.sizes.base / 3
          }}
        >
          <Text spacing={0.7} transform="uppercase">
            Challenges taken
          </Text>
        </Block>

        <Card row shadow color="gray">
          <Block middle flex={0.4}>
            <Badge color={rgba(theme.colors.white, '0.2')} size={74}>
              <Badge color={rgba(theme.colors.white, '0.2')} size={52}>
                <Icon.FontAwesome name="check" color="white" size={theme.sizes.h1} />
              </Badge>
            </Badge>
          </Block>
          <Block middle>
            <Text size={theme.sizes.base} spacing={0.4} medium white>
              Hit zero pedestrians
            </Text>
            <Text size={theme.sizes.base} spacing={0.4} medium white>
              during next trip - $10
            </Text>
          </Block>
        </Card>
      </Block>
    )
  }

  render() {
    return (
      <ScrollView style={styles.rewards} showsVerticalScrollIndicator={false}>
        {this.renderMonthly()}
        {this.renderRewards()}
        {this.renderChallenges()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  rewards: {
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 1.5,
    height: 1,
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1,
  },
})
