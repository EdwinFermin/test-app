import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Fontisto from "@expo/vector-icons/Fontisto";
//
import { Player } from "@redux/player/types";
import { AVATAR_PLACEHOLDER, COLORS } from "src/utils/Constants";

type Props = {
  player: Player;
  onPress: () => void;
};

export default function PlayerCard({ player, onPress }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Image
          source={{
            uri: imageFailed ? AVATAR_PLACEHOLDER : player.avatarUrl,
          }}
          onError={() => setImageFailed(true)}
          style={[styles.avatar, { borderColor: COLORS.orange }]}
          cachePolicy="memory-disk"
          transition={300}
        />
        {player.isFavorite && (
          <Fontisto
            name={"star"}
            size={8}
            color="white"
            style={[styles.star, { backgroundColor: COLORS.orange }]}
          />
        )}
      </View>

      <View style={styles.info}>
        <Text style={[styles.name, { color: COLORS.blue }]}>{player.name}</Text>
      </View>

      <View style={[styles.hcpContainer, { backgroundColor: COLORS.blue }]}>
        <Text style={styles.hcp}>{player.hcp}</Text>
        <Text style={styles.hcp}>HCP</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 3,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
  },
  hcpContainer: {
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  hcp: {
    fontSize: 16,
    color: "white",
  },
  star: {
    position: "absolute",
    bottom: 0,
    left: -8,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});
