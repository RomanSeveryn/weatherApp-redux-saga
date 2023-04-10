import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { CurrentWeatherDayType } from '../types';
import { createWeatherRequest } from '../actions/weatherCreators';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';

export const CurrentDay = ({ day, city }: CurrentWeatherDayType) => {
  const dispatch = useDispatch();
  const allData = useAppSelector((state) => state?.weather);

  const onRefresh = React.useCallback(() => {
    dispatch(createWeatherRequest());
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={allData?.isFetching}
          onRefresh={onRefresh}
        />
      }
    >
      <Text style={styles.temperature}>{Math.round(day.main.temp)}°</Text>
      <Text style={styles.weather}>{day.weather[0].main}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.city}>{city}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.icons8.com/material-rounded/24/FFFFFF/marker.png`,
          }}
        />
      </View>
      <Text style={styles.commonTemperature}>
        {Math.round(day.main.temp_max)}° / {Math.round(day.main.temp_min)}°
        Feels like {Math.round(day.main.temp_max) - 4}°
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  temperature: { fontSize: 100, color: 'white' },
  weather: {
    fontSize: 32,
    color: 'white',
    fontWeight: '400',
    marginLeft: 3,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center',
  },
  city: {
    fontSize: 32,
    color: 'white',
    fontWeight: '400',
    marginLeft: 3,
  },
  image: { height: 26, width: 26 },
  commonTemperature: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    marginLeft: 3,
    marginTop: 12,
  },
});
