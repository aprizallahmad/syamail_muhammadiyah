import Color from "../color/Color";
import { Dimensions } from "react-native";

export const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;

export const styles = {
  app: {
    flex: 3, // the number of columns you want to devide the screen into
    alignSelf: "center",
    width: width,
    marginTop: 10,
  },
  defaultStyle: {
    backgroundColor: Color.primary,
  },
  containerDefault: {
    boxShadow: '0px 0px 14px 1px rgba(140, 140, 140, 0.20)', 
    borderRadius: 16, 
    paddingHorizontal : 8 , 
    paddingVertical : 8,   
    marginBottom: 5,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
  item: {
    flex: 1,
    maxWidth: "40%", // 100% devided by the number of rows you want
    alignItems: "center",

    // my visual styles; not important for the grid
    padding: 5,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: Color.white,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom : 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: Color.black500,
  },
  inactiveDot: {
    backgroundColor: Color.black100,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  containerIndex: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  }
};
