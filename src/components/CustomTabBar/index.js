import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            })
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key={route.name}
              style={[
                styles.buttonTab,
                {
                  backgroundColor: isFocused
                    ? 'rgba(30, 30, 30, 0.34)'
                    : '#2BD410'
                }
              ]}
            >
              <Ionicons name={options.tabBarIcon} size={34} color="#F3F9FF" />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  content: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#2BD410',
    gap: 36,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
    width: '100%'
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 48,
    paddingVertical: 4,
    borderRadius: 20
  }
})
