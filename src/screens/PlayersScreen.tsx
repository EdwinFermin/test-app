import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from "react-native-switch-selector";
import { StatusBar } from "expo-status-bar";
//
import { RootState } from "@redux/store";
import PlayerCard from "@components/PlayerCard";
import { fetchPlayersRequest } from "@redux/player/actions";
import { Player } from "@redux/player/types";
import TopBar from "@components/TopBar";
import BackgroundSvg from "@assets/svgs/top_shape.svg";
import { COLORS } from "src/utils/Constants";
import ItemDivider from "@components/ItemDivider";
import SearchInput from "@components/SearchInput";
import { StackParamList } from "@navigation/PlayerStack";

const options = [
  { label: "A", value: 1 },
  { label: "B", value: 2 },
  { label: "C", value: 3 },
];

type NavigationProp = NativeStackNavigationProp<StackParamList, "PlayersList">;

export default function PlayersScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const { players, loading, error } = useSelector(
    (state: RootState) => state.players
  );

  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    dispatch(fetchPlayersRequest());
  }, [dispatch]);

  const filteredPlayers = players.filter(
    (player) =>
      player.team === selectedTab &&
      player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handlePress = (player: Player) => {
    navigation.navigate("Detail", { playerId: player.id });
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <BackgroundSvg
        style={StyleSheet.absoluteFillObject}
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="32%"
      />
      <TopBar title="Jugadores" />
      <View style={styles.container}>
        <SwitchSelector
          options={options}
          initial={0}
          onPress={(value) => setSelectedTab(Number(value))}
          buttonColor={COLORS.blue}
          fontSize={20}
          selectedColor="white"
          textColor={COLORS.orange}
          bold
          height={50}
          style={styles.switchSelector}
        />

        <SearchInput
          placeholder="Buscar jugador"
          value={searchText}
          onChangeText={setSearchText}
        />

        {loading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text>Error: {error}</Text>
        ) : filteredPlayers.length === 0 ? (
          <View style={styles.centeredContainer}>
            <Text style={{ fontSize: 18, color: "#a3a3a3" }}>
              No hay jugadores
            </Text>
          </View>
        ) : (
          <FlatList
            data={filteredPlayers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlayerCard player={item} onPress={() => handlePress(item)} />
            )}
            ItemSeparatorComponent={() => <ItemDivider />}
          />
        )}
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
    padding: 16,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  tab: {
    fontSize: 18,
    color: "#888",
  },
  activeTab: {
    color: "#000",
    fontWeight: "bold",
  },
  switchSelector: {
    marginBottom: 30,
    marginHorizontal: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
