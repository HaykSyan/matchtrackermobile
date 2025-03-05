import { View } from 'react-native';
import { Match } from '../../../lib/utils/types/match';
import TeamDetails from './TeamDetails';

const MatchDetails = ({ item }: { item: Match }) => {
  return (
    <View className="flex flex-col items-center justify-between gap-8 md:w-full md:flex-row">
      <TeamDetails key={0} item={item.homeTeam} />
      <TeamDetails key={1} item={item.awayTeam} />
    </View>
  );
};

export default MatchDetails;
