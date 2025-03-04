import { TouchableOpacity } from 'react-native';

import { SvgProps } from 'react-native-svg';
import ArrowDownSvg from '../../../../assets/arrow_down.svg';
const ArrowDownIcon: React.FC<SvgProps> = (props) => <ArrowDownSvg {...props} />;

const ArrowDown = ({ isOpen = false, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <ArrowDownIcon />
    </TouchableOpacity>
  );
};

export default ArrowDown;
