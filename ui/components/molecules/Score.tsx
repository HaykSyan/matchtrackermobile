import { View, Text } from 'react-native';
import { Score } from '../../../lib/utils/types/match';
import NumberAnimated from '../atoms/NumberAnimated';
import Status from '../atoms/Status';

const TeamScore = ({ homeScore, awayScore, status }: Score) => {
  return (
    <View className="flex flex-col items-center gap-1 md:text-lg">
      <View className="flex flex-row text-lg text-white text-white md:text-xl">
        <Text>
          <NumberAnimated value={homeScore} />
        </Text>
        <Text className="text-white">:&nbsp; </Text>
        <Text>
          <NumberAnimated value={awayScore} />
        </Text>
      </View>
      <Status status={status} />
    </View>
  );
};

export default TeamScore;
