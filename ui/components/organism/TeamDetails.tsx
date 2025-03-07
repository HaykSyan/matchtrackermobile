import { View, Text } from 'react-native';
import { Player, Team } from '../../../lib/utils/types/match';
import UserDefaultLogo from '../atoms/icons/UserDefaultLogo';
import NumberAnimated from '../atoms/NumberAnimated';
import AvatarWithName from './AwatarWithName';

const TeamDetails = ({ item }: { item: Team }) => {
  return (
    <View className="flex w-full flex-1 flex-col gap-2 md:w-1/2">
      <View className="flex flex-row items-center gap-2">
        {item?.players?.map((player: Player) => (
          <View className="flex-1 rounded bg-light-black">
            <AvatarWithName
              logo={<UserDefaultLogo />}
              name={player?.username}
              additionalScore={
                <Text className="flex flex-row items-center px-3 py-2 text-slate-400">
                  Убийств:{' '}
                  <Text className="text-white">
                    <NumberAnimated value={player?.kills} />
                  </Text>
                </Text>
              }
              className="px-1 py-1"
            />
          </View>
        ))}
      </View>
      <View className="flex flex-row items-center justify-around gap-6 rounded bg-light-black px-6 py-3.5">
        <Text className="text-slate-400">
          Points:{' '}
          <Text className="text-white">
            <NumberAnimated value={item?.points} />
          </Text>
        </Text>
        <Text className="text-slate-400">
          Место:{' '}
          <Text className="text-white">
            <NumberAnimated value={item?.place} />
          </Text>
        </Text>
        <Text className="text-slate-400">
          Всего убийств:{' '}
          <Text className="text-white">
            <NumberAnimated value={item?.total_kills} />
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default TeamDetails;
