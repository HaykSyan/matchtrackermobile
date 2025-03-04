import { View } from 'react-native';
import useRequest from '../../../lib/hooks/useRequest';
import { Match } from '../../../lib/utils/types/match';
import PageHeader from '../molecules/PageHeader';
import MatchItem from '../molecules/MatchItem';
import Logo from '../atoms/Logo';

const MatchTemplate = () => {
  const { isLoading, isFetching, isRefetching, matches, isError, filter, refetch } =
    useRequest('/fronttemp');

  return (
    <View className="flex flex-col gap-5 p-4">
      <PageHeader
        title={<Logo />}
        isLoading={isLoading || isFetching || isRefetching}
        isError={isError}
        refetch={refetch}
        filter={filter}
      />
      <View className="flex flex-col gap-3">
        {matches?.map((match: Match) => <MatchItem item={match} key={match.title} />)}
      </View>
    </View>
  );
};

export default MatchTemplate;
