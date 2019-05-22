const trips = [
  {
    id: 1,
    date: 'Today',
    score: 8.6,
    distance: '5.5 mi',
    from: 'Daan, Taipei, TW',
    to: 'Zhonsan, Taipei, TW',
  },
  {
    id: 2,
    date: 'Yesterday',
    score: 7.1,
    distance: '10.9 mi',
    from: 'Hsinchu, Hsinchu City, TW',
    to: 'Taoyuan, Taoyuan City, TW',
  },
  {
    id: 3,
    date: 'May 15th',
    score: 7.7,
    distance: '1.2 mi',
    from: 'Banchiao, New Taipei City, TW',
    to: 'Xinyi, Taipei City, TW',
  },
  {
    id: 4,
    date: 'April 3th',
    score: 8.4,
    distance: '102.2 mi',
    from: 'Shilin, Taipei City, TW',
    to: 'Tainan, Tainan City, TW',
  },
];

const drivingData = [
  {
    id: 1,
    status: 'bad',
    action: 'breaking',
    icon: require('../assets/images/Icon/BreakingBad.png'),
  },
  {
    id: 2,
    status: 'fair',
    action: 'speeding',
    icon: require('../assets/images/Icon/SpeedingFair.png'),
  },
  {
    id: 3,
    status: 'good',
    action: 'breaking',
    icon: require('../assets/images/Icon/BreakingGood.png'),
  },
];

const location = {
  latitude: 25.02060,
  longitude: 121.333229,
  latitudeDelta: 0.06,
  longitudeDelta: 0.06,
}

export { trips, drivingData, location };
