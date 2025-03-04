import Button from '../atoms/Button';
import ErrorMessage from '../atoms/ErrorMessage';
import Spinner from '../atoms/icons/Spinner';
import { Text, View } from 'react-native';

const PageHeader = ({
  title,
  isError = false,
  isLoading = false,
  filter,
  refetch,
}: {
  title: React.ReactNode;
  isError: boolean;
  isLoading: boolean;
  filter: (filter?: any) => void;
  refetch: () => void;
}) => {
  return (
    <View className="flex flex-col items-center justify-between gap-3.5 md:flex-row md:gap-0">
      <View className="m-0 flex w-full flex-col items-center gap-6 md:w-auto md:flex-row">
        <View>{title}</View>
      </View>
      <View className="flex w-full items-center gap-3">
        {isError && <ErrorMessage />}
        <Button onClick={refetch} className="flex w-full flex-row items-center justify-center">
          <View>
            <Text className="text-white">Обновить </Text>
          </View>
          <Spinner className={isLoading ? 'animate-spin' : ''} />
        </Button>
      </View>
    </View>
  );
};

export default PageHeader;
