import { Icons } from "../components/Icons";
import Home from "../screens/Home";
import { Favorite } from "../screens/Favorite";
import Settings from "../screens/Settings";
import Kitab from "../screens/Kitab";
import { DetailKitab } from "../screens/DetailKitab";
import HomeStack from "../screens/stack/HomeStack";

export const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.Ionicons,
    activeIcon: "grid",
    inActiveIcon: "grid-outline",
    component: HomeStack,
  },
  {
    route: "Like",
    label: "Like",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: Settings,
  },
  {
    route: "Search",
    label: "Search",
    type: Icons.MaterialCommunityIcons,
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: Favorite,
  }, // todo : ini nanti di ganti component last read
  {
    route: "Account",
    label: "Account",
    type: Icons.Ionicons,
    activeIcon: "settings-sharp",
    inActiveIcon: "settings-outline",
    component: Settings,
  },
];
 

export default TabArr;
