import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "expo-image";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
//
import { toggleFavorite } from "@redux/player/actions";
import { RootState } from "@redux/store";
import TopBar from "@components/TopBar";
import BackgroundSvg from "@assets/svgs/top_shape.svg";
import { AVATAR_PLACEHOLDER } from "@utils/Constants";
import { StackParamList } from "@navigation/PlayerStack";

type RouteProps = RouteProp<StackParamList, "Detail">;

export default function PlayerDetailScreen() {
  const route = useRoute<RouteProps>();
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) =>
    state.players.players.find((p) => p.id === route.params.playerId)
  );

  const [imageFailed, setImageFailed] = useState(false);

  if (!player) return <Text>Jugador no encontrado.</Text>;

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <BackgroundSvg
        style={StyleSheet.absoluteFillObject}
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="32%"
      />
      <TopBar title="Detalles del Jugador" showBack />
      <View style={styles.container}>
        <Image
          source={{
            uri: imageFailed ? AVATAR_PLACEHOLDER : player.avatarUrl,
          }}
          onError={() => setImageFailed(true)}
          style={styles.avatar}
          cachePolicy="memory-disk"
          transition={300}
        />
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.hcp}>HCP: {player.hcp}</Text>
        <Text style={styles.bioTitle}>Biografía</Text>
        <Text style={styles.bio}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Button
          title={
            player.isFavorite ? "Quitar de favoritos" : "Marcar como favorito"
          }
          onPress={() => dispatch(toggleFavorite(player.id))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  hcp: {
    fontSize: 18,
    marginBottom: 10,
  },
  bioTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  bio: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
});
