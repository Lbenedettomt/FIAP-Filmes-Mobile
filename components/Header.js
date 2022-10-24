import { useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { content } from '../data/mock';

export default function Header() {
  const navigation = useNavigation(); // Hook
  const mockData = content;
  return (
    <View>
      <Image style={styles.img} source={{ uri: 'https://www.themoviedb.org/t/p/original/2RVxn659a0mS0UPpY420cbGhYvY.jpg' }} />
      <TouchableOpacity onPress={() => navigation.navigate('Detail', mockData)}>
        <Text style={styles.button}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  button: {
    color: '#fff',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    width: 180,
    alignSelf: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: -15,
    zIndex: 999,
  },
});
