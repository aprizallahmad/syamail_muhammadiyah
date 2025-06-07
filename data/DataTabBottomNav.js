import { Icons } from "../components/Icons";
import { Favorite } from "../screens/Favorite";
import Settings from "../screens/Settings";
import HomeStack from "../screens/stack/HomeStack";

export const TabArr = [
  {
    route: "HomeTab",
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
    component: Favorite,
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
