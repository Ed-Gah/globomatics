import React from 'react';
import {ScrollView, View, Text, Image, Pressable, Alert} from 'react-native';

import styles from './styles/sharedStyles.js';

const Story = () => {
  return (
    <ScrollView
      // ref={a => (this.scroll = a)}
      style={styles.storyContainer}
      stickyHeaderIndices={[0, 1]}
      contentContainerStyle={styles.storyInnerContainer}
      indicatorStyle="white"
      pagingEnabled={true}>
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Pressable onPress={() => Alert.alert('Take me to the End')}>
          <Text style={styles.sectionDescriptionStory}> Go to the End</Text>
        </Pressable>
        <Text style={styles.sectionDescriptionStory}>
          This is going to be a lenghthy story of Isaac Newton, the father of
          physics.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Newton returned to Cambridge in 1667 and was elected a minor fellow.
          He constructed the first reflecting telescope in 1668, and the
          following year he received his Master of Arts degree and took over as
          Cambridge’s Lucasian Professor of Mathematics. Asked to give a
          demonstration of his telescope to the Royal Society of London in 1671,
          he was elected to the Royal Society the following year and published
          his notes on optics for his peers.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Through his experiments with refraction, Newton determined that white
          light was a composite of all the colors on the spectrum, and he
          asserted that light was composed of particles instead of waves. His
          methods drew sharp rebuke from established Society member Robert
          Hooke, who was unsparing again with Newton’s follow-up paper in 1675
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Known for his temperamental defense of his work, Newton engaged in
          heated correspondence with Hooke before suffering a nervous breakdown
          and withdrawing from the public eye in 1678. In the following years,
          he returned to his earlier studies on the forces governing gravity and
          dabbled in alchemy
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Newton returned to Cambridge in 1667 and was elected a minor fellow.
          He constructed the first reflecting telescope in 1668, and the
          following year he received his Master of Arts degree and took over as
          Cambridge’s Lucasian Professor of Mathematics. Asked to give a
          demonstration of his telescope to the Royal Society of London in 1671,
          he was elected to the Royal Society the following year and published
          his notes on optics for his peers.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Through his experiments with refraction, Newton determined that white
          light was a composite of all the colors on the spectrum, and he
          asserted that light was composed of particles instead of waves. His
          methods drew sharp rebuke from established Society member Robert
          Hooke, who was unsparing again with Newton’s follow-up paper in 1675
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Known for his temperamental defense of his work, Newton engaged in
          heated correspondence with Hooke before suffering a nervous breakdown
          and withdrawing from the public eye in 1678. In the following years,
          he returned to his earlier studies on the forces governing gravity and
          dabbled in alchemy
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          You have reach the End of this story
        </Text>
      </View>
    </ScrollView>
  );
};

export default Story;
