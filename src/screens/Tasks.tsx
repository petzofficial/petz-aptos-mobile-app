import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  Image,
} from 'react-native';
import { useCallback, useState } from 'react';
import { format, parse } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';

import type { TabParamList } from '../types/navigation';
import {
  Period,
  StatBarDataPoint,
  StatDataPoint,
  StatEntry,
} from '../types/stat';
import PeriodSelector from '../components/PeriodSelector';
import StatSummaryCard from '../components/StatSummaryCard';
import StatChart from '../components/StatChart';
import StatModule from '../native/StatModule';
import Button from '../components/Button';
type StatScreenProps = BottomTabScreenProps<TabParamList, 'Stat'>;

const STAT_ENTRY_FORMAT = 'yyyy-MM-dd';
const DAY_DESC_FORMAT = 'MMM dd, yyyy';

const mapStatEntries = ({ duration, date }: StatEntry): StatDataPoint => ({
  value: +(duration / 60).toFixed(2),
  date: parse(date, STAT_ENTRY_FORMAT, new Date()),
});

const mapWeekData = ({ value, date }: StatDataPoint) => ({
  value,
  date,
  label: format(date, 'E'),
  description: format(date, DAY_DESC_FORMAT),
});

const mapMonthData = ({ value, date }: StatDataPoint, index: number) => ({
  value,
  date,
  label: index === 0 || (index + 1) % 7 === 0 ? format(date, 'd') : '',
  description: format(date, DAY_DESC_FORMAT),
});

const mapYearData = ({ value, date }: StatDataPoint) => ({
  value,
  date,
  label: format(date, 'MMM'),
  description: format(date, 'MMMM yyyy'),
});

const barWidth = {
  [Period.WEEK]: 32,
  [Period.MONTH]: 10,
  [Period.YEAR]: 24,
};

const Tasks = (_props: StatScreenProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState(Period.WEEK);
  const [statEntries, setStatEntries] = useState<StatEntry[]>([]);
  const [statData, setStatData] = useState<StatBarDataPoint[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const { width } = useWindowDimensions();
  const [video, setVideo] = useState([
    {
      id: 1,
      image: require('../assets/icons/Ellipse.png'),
      text: 'Workout',
      text1: '0 minutes',
      test2: '0/1',
      test3: '25 min',
      img: require('../assets/icons/Vector.png'),
    },
    {
        id: 2,
        image: require('../assets/icons/Ellipse.png'),
        text: 'Workout',
        text1: '0 minutes',
        test2: '0/1',
        test3: '25 min',
        img: require('../assets/icons/Vector.png'),
      },
  ]);

  const focusEffectCb = useCallback(() => {
    setIsLoading(true);

    switch (selectedPeriod) {
      case Period.WEEK:
        StatModule.getWeekData().then((entries) => {
          const data = entries.map(mapStatEntries).map(mapWeekData);
          setStatEntries(entries);
          setStatData(data);
          setIsLoading(false);
        });
        break;
      case Period.MONTH:
        StatModule.getMonthData().then((entries) => {
          const data = entries.map(mapStatEntries).map(mapMonthData);
          setStatEntries(entries);
          setStatData(data);
          setIsLoading(false);
        });
        break;
      case Period.YEAR:
        StatModule.getYearData().then((entries) => {
          const data = entries.map(mapStatEntries).map(mapYearData);
          setStatEntries(entries);
          setStatData(data);
          setIsLoading(false);
        });
        break;
    }
  }, [selectedPeriod]);

  useFocusEffect(focusEffectCb);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FFFFFF',
              }}>
              Statistics
            </Text>
            <View>
              <Image
                source={require('../assets/icons/bell.png')}
                style={{ width: 27, height: 27, marginRight: 15 }}
              />
            </View>
          </View>
          <PeriodSelector
            periods={[
              { value: Period.WEEK, label: 'All' },
              { value: Period.MONTH, label: 'Complete' },
              { value: Period.YEAR, label: 'Incomplete' },
              { value: Period.YEAR, label: 'Pending' },
            ]}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
        </View>
        <View style={styles.subContent}>
          <Text>Today</Text>
          {video.map((e, index) => (
            <View key={index}>
                <View  style={styles.boxView}>
              <View>
                <Image  style={{width:30,height:30}}source={e.image}></Image>
              </View>
              <View>
                <Text style={{color:'black'}}>{e.text}</Text>
                <Text>{e.text1}</Text>
              </View>
              <View></View>
              <View></View>

              <View>
                <Text>{e.test2}</Text>
                <Text>{e.test3}</Text>
              </View>

              <Image style={{width:30,height:30}}source={e.img}></Image>
            </View>
            </View>
          ))}
          <View style={{marginTop:300}}>
          <Button btntext="+ Add New Task"/>
          </View>
        </View>

        {/* {!isLoading && (
          <>
            <View style={styles.chartWrapper}>
              <StatChart
                key={`${selectedPeriod}-${width}`}
                width={width - 32}
                height={300}
                barWidth={barWidth[selectedPeriod]}
                data={statData}
              />
            </View>

            {statData.length !== 0 && (
              <StatSummaryCard period={selectedPeriod} data={statEntries} />
            )}
          </>
        )} */}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 16,
  },

  chartWrapper: {
    marginVertical: 32,
  },
  boxView:{
   flexDirection:'row',
   height:54,
   shadowColor: "#000",
   justifyContent:'space-between',
   marginTop:30,
   marginBottom:4,
   alignItems:'center',
   borderRadius:17,
   paddingHorizontal:20,
   backgroundColor:'white',
   shadowColor: "#000",
   shadowOffset: {
       width: 0,
       height: 9,
   },
   shadowOpacity: 0.48,
   shadowRadius: 11.95,
   
   elevation: 2
  },

  header: {
    backgroundColor: '#FF975C',
    height: 150,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  subContent: {
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 25,
    flex:1
  },
  contentStyling: {
    flexDirection: 'row',
  },
});

export default Tasks;
