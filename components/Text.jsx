import React from 'react';
import { Text as TextPaper } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const Text = ({ children, style, ...rest }) => {
  const { colors } = useTheme();

  return (
    <TextPaper style={[{ color: colors.text }, style]} {...rest}>
      {children}
    </TextPaper>
  );
};

export default Text;