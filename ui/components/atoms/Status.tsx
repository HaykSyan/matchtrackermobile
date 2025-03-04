import { View, Text } from 'react-native';
import { status as _status } from '../../../lib/utils/constants/status';

const Status = ({ status }: { status: keyof typeof _status }) => {
  return (
    <View
      style={{ backgroundColor: _status[status].color }}
      className={`flex min-w-[92px] flex-row items-center justify-center rounded px-2 py-1.5 text-white first-letter:uppercase`}>
      <Text className="text-white">{_status[status].title}</Text>
    </View>
  );
};

export default Status;
