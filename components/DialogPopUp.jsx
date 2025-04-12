import { useState } from "react";
import { Button, View } from "react-native";
import Modal, { ModalButton, ModalContent, ModalFooter } from "react-native-modals";
import { functionLog } from "../helpers/functionHelper";  
import Text from "../components/Text"

export const DialogPopUp = ({navigation,  title, message, action }) => {
  const [visible, setVisible] = useState(true);

  functionLog(
    "dari dialog pop up >>>> , title " + title + "  dan pesan : " + message
  );

  return (
    <View>
      <Modal
        visible={visible}
        onTouchOutside= { ()=>navigation.navigate("Home") }
        footer={
          <ModalFooter> 
            <ModalButton text="OK" onPress={() => {action()}} />
          </ModalFooter>
        }
      >
        <ModalContent>
          <View  style={{ alignItems: "center", justifyContent: "center" , backgroundColor:"white", borderBottomWidth: 1, paddingBottom : 6 , borderBottomColor: "#D1D1D1"}}>
            <Text> {title} </Text>
          </View>
          <View className = "mt-2 justify-center items-center">
            <Text className="text-center"> {message} </Text>
          </View>
        </ModalContent>
      </Modal>
    </View>
  );
};
