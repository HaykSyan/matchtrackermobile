import { useState } from 'react';
import { View } from 'react-native';
import { Match } from '../../../lib/utils/types/match';
import TeamDefaultLogo from '../atoms/icons/TeamDefaultLogo';
import AwatarWithName from '../organism/AwatarWithName';
import TeamScore from './Score';
import ArrowDown from '../atoms/icons/ArrowDown';
import MatchDetails from '../organism/MatchDetails';

const MatchItem = ({ item }: { item: Match }) => {
  const [isColapseOpen, setIsColapseOpen] = useState<boolean>(false);
  return (
    <View className="bg-medium-black flex flex-col gap-8 p-2 md:px-9 md:py-4">
      <View className="flex flex-row items-center justify-between">
        <AwatarWithName logo={<TeamDefaultLogo />} name={item.homeTeam.name} />
        <TeamScore status={item.status} homeScore={item.homeScore} awayScore={item.awayScore} />
        <View className="flex flex-row items-center gap-3">
          <AwatarWithName
            logo={<TeamDefaultLogo />}
            name={item.awayTeam.name}
            className="flex-row-reverse"
          />
          <View className="hidden md:block">
            <ArrowDown
              isOpen={isColapseOpen}
              onClick={() => setIsColapseOpen((prev: boolean) => !prev)}
            />
          </View>
        </View>
      </View>
      {isColapseOpen && <MatchDetails item={item} />}
      <View className="flex w-full flex-row justify-center md:hidden">
        <ArrowDown
          isOpen={isColapseOpen}
          onClick={() => setIsColapseOpen((prev: boolean) => !prev)}
        />
      </View>
    </View>
  );
};

export default MatchItem;
