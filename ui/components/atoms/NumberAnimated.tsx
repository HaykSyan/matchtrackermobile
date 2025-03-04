import AnimatedNumbers from 'react-native-animated-numbers';

const NumberAnimated = ({ value }: { value: number }) => (
  <AnimatedNumbers
    includeComma
    animateToNumber={value}
    fontStyle={{ fontSize: 16, fontWeight: 'normal', color: '#FFF' }}
  />
);

export default NumberAnimated;
