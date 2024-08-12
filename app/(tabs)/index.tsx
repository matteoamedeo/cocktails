import { Image, StyleSheet, Platform, Dimensions, View, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Card from '@/components/Card';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface CardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

const data: CardData[] = [
  {
    id: '1',
    title: 'Mojito',
    description: 'This is the description for card 1.',
    image: 'https://www.cucchiaio.it/content/cucchiaio/it/ricette/2019/06/mojito/jcr:content/header-par/image-single.img.jpg/1560847262813.jpg?im=Resize=(984)',
  },
  {
    id: '2',
    title: 'Spritz',
    description: 'This is the description for card 2.',
    image: 'https://www.senzaalcoolshop.it/media/catalog/product/cache/4a5cf70630b9c3080e492221e54d9a9f/b/l/blood-orange-spritz-800x600.png',
  },
  {
    id: '3',
    title: 'Whisky Sour',
    description: 'This is the description for card 3.',
    image: 'https://drinkabile.cdaweb.it/wp-content/uploads/2021/09/whisky-sour-ricetta-cocktail.jpeg',
  },
  // Add more cards here...
];

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/react-native-cocktail-home-2.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Cocktails List</ThemedText>
      </ThemedView>

      <View className="py-4">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </View>
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 16,
  },
});
