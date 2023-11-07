import { Pressable, StyleSheet, Text, View } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

export default function Button({title, onPress=()=>{}, color, textColor}) {
  return (
    <View style={{...styles.mainContainer, backgroundColor: color}}>
        <Pressable onPress={onPress} android_ripple={{color: "grey"}} >
            <Text style={{...styles.text, color: textColor}}>{title}</Text>
        </Pressable>
    </View>
  );
}
// export default function Button({title, onPress=()=>{}, color, textColor}) {
//   return (
//     <LinearGradient colors={color} start={{x: 0, y: 1}} style={{...styles.mainContainer}}>
//         <Pressable onPress={onPress} android_ripple={{color: "grey"}} >
//             <Text style={{...styles.text, color: textColor}}>{title}</Text>
//         </Pressable>
//     </LinearGradient>
//   );
// }

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        borderRadius: 100,
        overflow: "hidden"
    },
    text: {
        textAlign: "center",
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 18
    }
})