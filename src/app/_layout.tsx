import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import { TamaguiProvider } from 'tamagui';

import config from '@/tamagui.config';

export default function RootLayout() {
  const [loaded] = useFonts({
    PretendardThin: require('@assets/fonts/Pretendard-Thin.otf'),
    PretendardExtraLight: require('@assets/fonts/Pretendard-ExtraLight.otf'),
    PretendardLight: require('@assets/fonts/Pretendard-Light.otf'),
    PretendardRegular: require('@assets/fonts/Pretendard-Regular.otf'),
    PretendardMedium: require('@assets/fonts/Pretendard-Medium.otf'),
    PretendardBold: require('@assets/fonts/Pretendard-Bold.otf'),
    PretendardExtraBold: require('@assets/fonts/Pretendard-ExtraBold.otf'),
    PretendardBlack: require('@assets/fonts/Pretendard-Black.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  );
}
