import { Text, View } from 'react-native';

const AwatarWithName = ({
  logo,
  name,
  className = '',
  additionalScore,
}: {
  logo: React.ReactNode;
  name: string;
  className?: string;
  additionalScore?: string | React.ReactNode;
}) => {
  return (
    <View
      className={`
      flex flex-row items-center justify-between
      ${additionalScore ? 'flex-col flex-wrap lg:flex-row' : 'flex-col md:flex-row'}
    `}>
      <View className={`flex flex-row items-center gap-1.5 md:gap-3.5 ${className}`}>
        {logo}
        <Text className="text-white">{name}</Text>
      </View>
      {additionalScore && additionalScore}
    </View>
  );
};

export default AwatarWithName;
