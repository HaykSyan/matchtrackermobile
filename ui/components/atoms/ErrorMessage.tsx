import { Text, View } from 'react-native';
import DangerIcon from './icons/DangerIcon';

const ErrorMessage = () => {
  return (
    <View className={'bg-medium-black flex items-center gap-2.5 rounded p-4'}>
      <DangerIcon />
      <Text className={'m-0 text-white md:text-lg'}>Ошибка: не удалось загрузить информацию</Text>
    </View>
  );
};

export default ErrorMessage;
