import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import {
  Caption,
  Headline,
  Subheading,
  Text,
  TextInput,
  Title,
} from "react-native-paper";
import shared from "./styles/shared";
import DropDown from "react-native-paper-dropdown";
import volumes from "./config/volumes.json";

function Calculator() {
  const dropdownData = volumes.map((v) => ({ label: v.name, value: v.unity }));
  const [showDropdown, setShowDropdown] = useState(false);
  const [unitySelected, setUnitySelected] = useState(dropdownData[0].value);

  const [total, setTotal] = useState("0");
  const [porcentagem, setPorcentagem] = useState("0");

  const totalAlcoolPercent =
    (parseInt(total, 10) / 100) * parseInt(porcentagem, 10);

  return (
    <SafeAreaView style={shared.AndroidSafeArea}>
      <View
        style={{
          paddingHorizontal: 16,
        }}
      >
        <DropDown
          mode="outlined"
          label="Unidade de Medida"
          showDropDown={() => setShowDropdown(true)}
          onDismiss={() => setShowDropdown(false)}
          list={dropdownData}
          value={unitySelected}
          setValue={(value) => setUnitySelected(value)}
          visible={showDropdown}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          mode="outlined"
          label="Volume de líquido"
          style={{ flex: 1 }}
          keyboardType="numeric"
          value={total}
          onChangeText={setTotal}
        />
        <Headline
          style={{ marginHorizontal: 16, width: "20%", textAlign: "center" }}
        >
          {unitySelected}
        </Headline>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          mode="outlined"
          label="Porcentagem de alcool"
          style={{ flex: 1 }}
          keyboardType="numeric"
          value={porcentagem}
          onChangeText={setPorcentagem}
        />
        <Headline
          style={{ marginHorizontal: 16, width: "20%", textAlign: "center" }}
        >
          %
        </Headline>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Title>O total de alcool no líquido é de:</Title>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Subheading>{totalAlcoolPercent.toFixed(2)}%</Subheading>
          <Caption>
            Equivalente a:{" "}
            {((totalAlcoolPercent / 100) * parseInt(total, 10)).toFixed(2)}{" "}
            {unitySelected}
          </Caption>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Calculator;
