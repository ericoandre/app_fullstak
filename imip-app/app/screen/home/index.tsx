import { Link, router, useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, Image, TouchableOpacity, View,Button, StatusBar } from 'react-native';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const doctors = [
    {
      id: '1',
      name: 'Dr. R. Nordin',
      specialty: 'Dentista',
      location: 'New York City',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '2',
      name: 'Dr. A. Mist',
      specialty: 'Dentista',
      location: 'New York City',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      favorite: true,
    },
    {
      id: '3',
      name: 'Dr. C. Onojeghuo',
      specialty: 'Dentista',
      location: 'New York City',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
    },
];
  
export default function Home(){
    const user = useLocalSearchParams();
    const auth = getAuth();
    const navigation = useNavigation();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
          setUserInfo({
            email: user.email,
          });
        } else {
          setIsLoggedIn(false);
          setUserInfo(null);
          router.push({pathname:'screen/singin' });
        }
      });
    
      return () => unsubscribe();
    }, []);



    const handleLogout = async () => {
      try {
        await signOut(auth);
        router.push({pathname:'screen/singin' });
      } catch (error) {
        console.error('Erro ao sair:', error);
      }
    };

    const renderDoctor = ({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.avatar} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.specialty}>{item.specialty}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agenda</Text>
          </TouchableOpacity>
          {/* {item.favorite && <Text style={styles.favorite}>❤️</Text>} */}
        </View>
    );


    return (<>
      <StatusBar
  barStyle="light-content"
  translucent
  backgroundColor='transparent'
/>
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../../assets/user-line-3.png')} style={styles.profileImage} />
            <Text style={styles.username}>{user.email}</Text>
            <Button title="Logout" onPress={handleLogout} color="#000" />
        </View>

        <View style={{backgroundColor: '#f2f2f2' }}>
          <Text style={styles.sectionTitle}>Top Doctor</Text>
          <FlatList data={doctors} renderItem={renderDoctor} keyExtractor={(item) => item.id} />
        </View>
    </View></>
    )
}

const styles = StyleSheet.create({ 
    container: { flex: 1, backgroundColor: '#f2f2f2' },
    header: { 
      backgroundColor: '#007AFF', 
      alignItems: 'center', 
      paddingVertical: 40,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 100,

    },
    
    profileImage: { 
      width: 80, 
      height: 80, 
      borderRadius: 40, 
      marginBottom: 10,
      backgroundColor: 'white',
    },
    
    username: { 
      color: 'white', 
      fontSize: 15, 
      fontWeight: 
      'bold' 
    },

    sectionTitle: { fontSize: 24, fontWeight: 'bold', margin: 20 },
    card: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginVertical: 8,
      padding: 10,
      borderRadius: 10,
      position: 'relative',
    },
    avatar: { width: 50, height: 50, borderRadius: 25 },
    info: { flex: 1, marginLeft: 10 },
    name: { fontSize: 16, fontWeight: 'bold' },
    specialty: { fontSize: 14, color: 'gray' },
    location: { fontSize: 12, color: 'gray' },
    button: {
      backgroundColor: '#e0e0e0',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: { fontSize: 14, color: 'black' },
    favorite: { position: 'absolute', top: 10, right: 10, fontSize: 18 },
  });