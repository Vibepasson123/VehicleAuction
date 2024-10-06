import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
interface PulseTextProps {
    message: string;
    color?: string;
    fontSize?: number;
  }
  const PulseText: React.FC<PulseTextProps> = ({ message, color,fontSize }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.3,
          duration: 1100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: true,
        }),
      ])
    );

    pulseAnimation.start();

    return () => pulseAnimation.stop();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
          <Animated.Text
        style={[
          styles.pulseText,

          { transform: [{ scale: scaleAnim }], color: color || '#ff6347', fontSize:fontSize },
        ]}
      >
        {message}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pulseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PulseText;
