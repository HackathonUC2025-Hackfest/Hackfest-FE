import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {  router } from "expo-router";

export default function SmartInput() {
  const [selectedDates, setSelectedDates] = useState([11, 12, 13, 14]);
  const [selectedActivities, setSelectedActivities] = useState(['Nature Exploration']);
  const [selectedTravelStyle, setSelectedTravelStyle] = useState([]);
  const [selectedIntensity, setSelectedIntensity] = useState([]);

  const toggleActivity = (activity) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter(item => item !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const toggleTravelStyle = (style) => {
    if (selectedTravelStyle.includes(style)) {
      setSelectedTravelStyle(selectedTravelStyle.filter(item => item !== style));
    } else {
      setSelectedTravelStyle([...selectedTravelStyle, style]);
    }
  };

  const toggleIntensity = (intensity) => {
    if (selectedIntensity.includes(intensity)) {
      setSelectedIntensity(selectedIntensity.filter(item => item !== intensity));
    } else {
      setSelectedIntensity([...selectedIntensity, intensity]);
    }
  };

  const renderCalendar = () => {
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const daysInMonth = 31; // March 2025 has 31 days
    
    return (
      <View style={styles.calendarContainer}>
        <View style={styles.monthSelector}>
          <TouchableOpacity>
            <Text style={styles.monthArrow}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthTitle}>Maret 2025</Text>
          <TouchableOpacity>
            <Text style={styles.monthArrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.daysHeader}>
          {days.map(day => (
            <Text key={day} style={styles.dayLabel}>{day}</Text>
          ))}
        </View>
        
        <View style={styles.datesContainer}>
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(date => (
            <TouchableOpacity 
              key={date} 
              style={styles.dateCell}
            >
              <Text 
                style={[
                  styles.dateText, 
                  selectedDates.includes(date) && styles.selectedDateText
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#8B1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Smart Planner</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Travel Destinition</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Ex. Malang, Bali"
          />
          <Ionicons name="chevron-down" size={24} color="#8B1A1A" style={styles.inputIcon} />
        </View>
        
        <Text style={styles.sectionTitle}>Travel Dates</Text>
        {renderCalendar()}
        
        <Text style={styles.sectionTitle}>Activity Preferences</Text>
        <View style={styles.chipsContainer}>
          {['Nature Exploration', 'History & culture', 'Culinary', 'Shopping', 'Family'].map(activity => (
            <TouchableOpacity 
              key={activity}
              style={[
                styles.chip,
                selectedActivities.includes(activity) && styles.selectedChip
              ]}
              onPress={() => toggleActivity(activity)}
            >
              <Text style={styles.chipText}>{activity}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Travel Budget</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Ex. Rp 250,000"
            keyboardType="numeric"
          />
        </View>
        
        <Text style={styles.sectionTitle}>Travel Style</Text>
        <View style={styles.chipsContainer}>
          {['Solo Traveler', 'Romantic couple', 'Family with children', 'Backpacker', 'Luxury Traveler'].map(style => (
            <TouchableOpacity 
              key={style}
              style={[
                styles.chip,
                selectedTravelStyle.includes(style) && styles.selectedChip
              ]}
              onPress={() => toggleTravelStyle(style)}
            >
              <Text style={styles.chipText}>{style}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>Activity Intensity</Text>
        <View style={styles.chipsContainer}>
          {['Relaxed', 'Balanced', 'Full'].map(intensity => (
            <TouchableOpacity 
              key={intensity}
              style={[
                styles.chip,
                selectedIntensity.includes(intensity) && styles.selectedChip
              ]}
              onPress={() => toggleIntensity(intensity)}
            >
              <Text style={styles.chipText}>{intensity}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity style={styles.generateButton} onPress={() => router.push("/smarthistory")}>
          <Text style={styles.generateButtonText}>Generate Plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#8B1A1A',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555555',
    marginTop: 16,
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'center',
    position: 'relative',
  },
  input: {
    fontSize: 16,
    color: '#333333',
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthArrow: {
    fontSize: 18,
    color: '#555555',
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  daysHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayLabel: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 12,
    color: '#999999',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: '14.28%',
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  dateText: {
    fontSize: 14,
    color: '#333333',
  },
  selectedDateText: {
    color: '#E53935',
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedChip: {
    borderColor: '#8B1A1A',
    backgroundColor: '#FFF5F5',
  },
  chipText: {
    fontSize: 14,
    color: '#555555',
  },
  generateButton: {
    backgroundColor: '#8B1A1A',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});