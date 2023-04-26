import { View } from "react-native";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import FormLogin from "../components/FormLogin";
import { KeyboardAvoidingScrollView } from "@tbnb/react-native-keyboard-sticky-avoiding-scroll-view";
import FormRegister from "../components/FormRegister";

const Register = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-700">
      <KeyboardAvoidingScrollView
        stickyFooter={<NavBar navigation={navigation} />}
      >
        <View className="mt-10"></View>
        <Header titulo="Registrarse" subtitulo="" />
        <FormRegister navigation={navigation} />
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Register;
