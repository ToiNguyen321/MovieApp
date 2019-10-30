import { createStackNavigator } from "react-navigation-stack";
import OpenApp from "../screens/OpenApp";
import Register from "../screens/register/Register";
import { createAppContainer } from "react-navigation";

const stackApp = createStackNavigator(
   {
      OpenApp: OpenApp,
      Register: Register
   },
   {
      initialRouteName: 'OpenApp',
      headerMode: 'none',
      mode: 'modal',
      transparentCard: true
   }
)

const AppContainer = createAppContainer(stackApp);
export default AppContainer;