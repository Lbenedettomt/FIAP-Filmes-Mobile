import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o app</Text>
      <Text style={styles.text}>FIAP Filmes Mobile</Text>
      <Text style={styles.text}>Equipe:</Text>
      <Text style={styles.alunoInfo}>Luigi Di Benedetto Máximo Torres - 86335</Text>
      <Text style={styles.alunoInfo}>Leonardo Cesar de Mendonça - 84689 (3ECR)</Text>
      <Text style={styles.alunoInfo}>Moises Isaias Lima Quiñelén - 86427</Text>
      <Text style={styles.alunoInfo}>João Rafael Galhardo Rui - 82114</Text>
      <Text style={styles.alunoInfo}>Gabriel Boragina Fazani - 84447</Text>
      <Text style={styles.alunoInfo}>Rafael Perez Masson - 84380</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 8,
    alignItems: 'center',
    justifycontent: 'center',
  },
  title: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 20,
  },
  alunoInfo: {
    color: 'white',
  },
});
