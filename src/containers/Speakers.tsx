import React, {useState} from 'react';
import {Text, FlatList, View, TextInput, Pressable, Image} from 'react-native';
import {speakers} from '../data/speakers.json';
import styles from '../containers/styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from '../components/Header';

const Speakers = () => {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  const getSearchText = (text: any) => {
    let filteredSpeakerList = speakers.filter((value: any) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSpeakers(filteredSpeakerList);
  };

  const SearchSessions = (props: any) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: any) => {
      setSearchText(text);
      props.getSearchText(text);
    };

    const clearSearch = () => {
      props.getSearchText('');
    };

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => handleSearch(text)}
          placeholder="Search Sessions"
          returnKeyType="go"
          autoFocus={true}
        />
        <Pressable onPress={clearSearch} style={styles.clearContaiiner}>
          <Image
            style={styles.clearImage}
            source={require('../images/multiply-1_Orange.png')}
          />
        </Pressable>
      </View>
    );
  };
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <SpeakerList
          id={index}
          name={item.name}
          bio={item.bio}
          session={item.sessions[0].name}
        />
      </View>
    );
  };
  const SpeakerList = ({id, name, bio, session}: any) => {
    return (
      <View style={styles.sectionContainer} key={id}>
        <Text style={styles.sectionTitle}>{'Speaker Name: ' + name}</Text>
        <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
        <Text style={styles.sectionDescriptionBold}>
          {'Session: ' + session}
        </Text>
      </View>
    );
  };
  const SeperatorComponent = () => {
    return <View style={styles.seperatorStyle}></View>;
  };
  const HeaderComponent = () => {
    return (
      <Header
        imgae={require('../images/girl.png')}
        heading="Speakers Lineups!!!"
        style={styles.sectionTitleBlue}
      />
    );
  };
  const FooterComponent = () => {
    return <Footer />;
  };
  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        data={filteredSpeakers}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeperatorComponent}
        pagingEnabled={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
};

export default Speakers;
