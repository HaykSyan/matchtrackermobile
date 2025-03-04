import { SvgProps } from 'react-native-svg';
import DropdownArrowSvg from '../../../../assets/dropdown_arrow.svg';
import { View } from 'react-native';
const DropdownArrowIcon: React.FC<SvgProps> = (props) => <DropdownArrowSvg {...props} />;
const DropdownArrow = ({ isOpen }: { isOpen: boolean }) => (
  <View className={isOpen ? 'rotate-180' : ''}>
    <DropdownArrowIcon />
  </View>
);

export default DropdownArrow;
