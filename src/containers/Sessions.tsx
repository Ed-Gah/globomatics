import React, {useState} from 'react';
import {View, Text, SectionList, TouchableOpacity} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from '../containers/styles/sharedStyles.js';
import {Footer} from '../components/Footer';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Sessions = () => {
  const SectionComponent = ({section}: any) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{section.title}</Text>
      </View>
    );
  };
  const SessionList = props => {
    const [moreInfo, setMoreInfo] = useState(false);
    return (
      <View key={props.id}>
        <Text style={styles.sectionTitle}>{'Section: ' + props.name}</Text>
        <Text style={styles.sectionContainer}>
          {'Speaker: ' + props.speaker}
        </Text>
        <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
          <Text style={styles.clickableText}>
            {moreInfo ? 'Hide Details' : 'Show More Details'}
          </Text>
        </TouchableOpacity>
        {moreInfo && (
          <>
            <Text style={styles.sectionContainer}>
              {'Details: ' + props.desc}
            </Text>
            <Text style={styles.sectionContainer}>{'Room: ' + props.room}</Text>
            <Text style={styles.sectionContainer}>
              {'Level: ' + props.level}
            </Text>
          </>
        )}
      </View>
    );
  };
  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <SessionList
          id={index}
          name={item.title}
          desc={item.description}
          speaker={item.speakers[0].name}
          level={item.level}
          room={item.room}
        />
      </View>
    );
  };
  const SeperatorComponent = () => {
    return <View style={styles.seperatorStyle}></View>;
  };
  const HeaderComponent = () => {
    return (
      <Header
        image={require('../images/sec2.jpg')}
        heading="Sessons LineUps!!!"
        sytle={styles.sectionTitle}
      />
    );
  };
  const FooterComponent = () => {
    return <Footer />;
  };
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        renderSectionHeader={SectionComponent}
        stickySectionHeadersEnabled={true}
        ListFooterComponent={FooterComponent}
        ListHeaderComponent={HeaderComponent}
        ItemSeparatorComponent={SeperatorComponent}
      />
    </View>
  );
};

export default Sessions;
