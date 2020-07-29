import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from 'react-native';

import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';
import Div from '../../../../Component/Div';
import ResidenceAddHeader from '../../../../Component/ResidenceAddHeader';

export default function ResidenceAddLocation() {
  const [zipcode, setZipcode] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [proximity, setProximity] = useState('');
  const width = useWindowDimensions().width;
  return (
    <>
      <ResidenceAddHeader />
      <View style={styles.container}>
        <View style={[styles.card, {width: width - 55}]}>
          <Text style={styles.cardTitle}> Localização </Text>
          <Div threshold={120} height={2} />
          <Text style={styles.description}>
            Aqui você pode definir a Localização da residência.
          </Text>
          <View style={styles.main}>
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={zipcode}
              onChangeText={(text) => setZipcode(text)}
              placeholder={'Cep:'}
              keyboardType={'numeric'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={street}
              onChangeText={(text) => setStreet(text)}
              placeholder={'Rua:'}
            />

            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={number}
              onChangeText={(text) => setNumber(text)}
              placeholder={'Número'}
              keyboardType={'numeric'}
            />

            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={neighborhood}
              onChangeText={(text) => setNeighborhood(text)}
              placeholder={'Bairro'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={city}
              onChangeText={(text) => setCity(text)}
              placeholder={'Cidade'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={state}
              onChangeText={(text) => setState(text)}
              placeholder={'Estado'}
            />
            <TextInput
              style={[styles.input, {width: width - 80}]}
              value={proximity}
              onChangeText={(text) => setProximity(text)}
              placeholder={'Proximidades'}
            />
          </View>

          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.navButton} onPress={() => {}}>
              <Icon name={'arrow-left-circle'} color={'#7E57C2'} size={40} />
            </TouchableOpacity>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.activeDot}>•</Text>
            <TouchableOpacity style={styles.navButton} onPress={() => {}}>
              <Icon name={'check-circle'} color={'#26E07C'} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
