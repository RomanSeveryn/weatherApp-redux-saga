import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet/src';
import React, { useCallback, useMemo, useRef } from 'react';
import { WeatherDayType } from '../types';

type BottomModalType = {
  listOfWeather: Array<WeatherDayType>;
  onPressWeatherDay: (day: WeatherDayType) => void;
};

export const BottomModal = ({
  listOfWeather,
  onPressWeatherDay,
}: BottomModalType) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        {(listOfWeather || []).map((elem, id) => {
          const day = elem.dt_txt.split(' ')[0].slice(5);
          return (
            <TouchableOpacity
              key={id}
              style={styles.dayContainer}
              onPress={() => onPressWeatherDay(elem)}
            >
              <Text>{day}</Text>
              <View style={styles.humidityContainer}>
                <Image
                  style={styles.imageHumidity}
                  source={{
                    uri: `https://cdn-icons-png.flaticon.com/512/3262/3262970.png`,
                  }}
                />
                <Text>{elem.main.humidity}%</Text>
              </View>
              <Image
                style={styles.weatherIcon}
                source={{
                  uri: `https://openweathermap.org/img/w/${elem.weather[0].icon}.png`,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Text style={styles.mainTemperature}>
                  {Math.round(elem.main.temp_max)}°
                </Text>
                <Text>{Math.round(elem.main.temp_min)}°</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dayContainer: {
    width: '95%',
    marginBottom: 5,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  humidityContainer: { flexDirection: 'row', alignItems: 'center' },
  imageHumidity: { height: 16, width: 16 },
  weatherIcon: { height: 42, width: 42 },
  mainTemperature: { marginRight: 12 },
});
