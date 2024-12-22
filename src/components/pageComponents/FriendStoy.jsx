import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StoryData } from "../../assets/data/StoryData";
import { LIGHTGREY, PRIMARYCOLOR, WHITE } from "../../constatnt/color";

export const FriendStory = ()=>{
    return(
        <>
            {StoryData.map(item=>(
                 <View key={item.id} style={styles.friendStoryContainer}>
                 <Image source={item.storyImg} style={styles.storyImg} />
                 <View style={styles.profileImgContainer}>
                   <Image source={item.profileImg} style={styles.profileImg} />
                 </View>
                 <View style={styles.friendNameContainer}>
                   <Text style={styles.friendName}>{item.name}</Text>
                 </View>
               </View>
            ))}
        </>
    )
};

const styles = StyleSheet.create({
    friendStoryContainer: {
        borderWidth: 1,
        borderColor: LIGHTGREY,
        borderRadius: 10,
        marginLeft: 5,
        position: 'relative',
      },
      storyImg: {
        height: 180,
        width: 110,
        borderRadius: 10,
      },
      profileImg: {
        height: 35,
        width: 35,
        borderRadius: 50,
      },
      profileImgContainer: {
        position: 'absolute',
        top: 5,
        left: 5,
        borderWidth: 2,
        borderColor: PRIMARYCOLOR,
        borderRadius: 50,
        height: 42,
        width: 42,
        justifyContent: 'center',
        alignItems: 'center',
      },
      friendNameContainer: {
        position: 'absolute',
        left: 8,
        bottom: 8,
      },
      friendName: {
        color: WHITE,
        fontSize: 14,
      },
});