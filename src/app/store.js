import { configureStore } from "@reduxjs/toolkit";
import fag_health_card_showReducer from "../features/fag_health_card_show/fag_health_card_showSlice";
import fag_aid_card_showReducer from "../features/fag_aid_card_show/fag_aid_card_showSlice";
import userReducer from "../features/user/userSlice";
import show_appReducer from "../features/show_app/show_appSlice";
import diabetes_InputsReducer from "../features/diabetes_Inputs/diabetes_InputsSlice";
import heart_attack_InputsReducer from "../features/heart_attack_Inputs/heart_attack_InputsSlice";
import breast_cancer_InputsReducer from "../features/breast_cancer_Inputs/breast_cancer_InputsSlice";
import parkinson_InputsReducer from "../features/parkinson_Inputs/parkinson_InputsSlice";
import chatbot_messagesReducer from "../features/chatbot_messages/chatbot_messages";

export default configureStore({
  reducer: {
    fag_health_card_show: fag_health_card_showReducer,
    fag_aid_card_show: fag_aid_card_showReducer,
    user: userReducer,
    show_app: show_appReducer,
    diabetes_Inputs: diabetes_InputsReducer,
    heart_attack_Inputs: heart_attack_InputsReducer,
    breast_cancer_Inputs: breast_cancer_InputsReducer,
    parkinson_Inputs: parkinson_InputsReducer,
    chatbot_messages: chatbot_messagesReducer,
  },
});
