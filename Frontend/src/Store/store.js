import {configureStore} from "@reduxjs/toolkit"
import ActiveUserSlice from "./userSlice";
import UserCoordsSlice from "./userCoordsSlice";
import UserAnswerSlice from "./userAnswerSlice";




const store=configureStore({
    reducer:{
      activeUser:ActiveUserSlice.reducer,
      userCoords:UserCoordsSlice.reducer,
      userAnswerCoords:UserAnswerSlice.reducer
    }
});

export default store;