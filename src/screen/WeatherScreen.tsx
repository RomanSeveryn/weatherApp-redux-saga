import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CurrentDay } from '../components/CurrentDay';
import { BottomModal } from '../components/BottomModal';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { WeatherDayType } from '../types';
import { createWeatherRequest } from '../actions/weatherCreators';

export const WeatherScreen = () => {
  const dispatch = useDispatch();
  const allData = useAppSelector((state) => state?.weather);

  const listOfWeather = allData?.weather?.filter(
    (day) => day?.dt_txt.split(' ')[1] === '15:00:00',
  );

  const [currentDay, setCurrentDay] = useState<WeatherDayType>();

  useEffect(() => {
    if (allData) {
      setCurrentDay(allData?.weather[0]);
    }
  }, [allData]);

  useEffect(() => {
    dispatch(createWeatherRequest());
  }, []);

  const onPressWeatherDay = (day: WeatherDayType) => {
    setCurrentDay(day);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {currentDay ? (
          <CurrentDay day={currentDay} city={allData.currentCity} />
        ) : (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
        <BottomModal
          listOfWeather={listOfWeather}
          onPressWeatherDay={onPressWeatherDay}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#85C9E9',
  },
});
