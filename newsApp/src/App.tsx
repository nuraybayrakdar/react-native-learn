import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

function App() {
  const renderNews = ({item}: {item: any}) => <NewsCard news={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banenr_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banenr_image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width ,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 40,
  }
});

export default App;
