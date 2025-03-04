import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MatchTemplate from './ui/components/templates/MatchTemplate';

import './global.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ScrollView className="bg-page">
      <QueryClientProvider client={queryClient}>
        <SafeAreaView>
          <PaperProvider>
            <MatchTemplate />
          </PaperProvider>
        </SafeAreaView>
      </QueryClientProvider>
      <StatusBar style="auto" />
    </ScrollView>
  );
}
