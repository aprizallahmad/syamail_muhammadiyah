import { width } from "../../data/Data";

export const styles = {
    app: {
      flex: 3, // the number of columns you want to devide the screen into
      marginHorizontal: "auto",
      width: { width },
      marginTop: 10,
    },
    sectionHeader: {
      fontWeight: "800",
      fontSize: 18,
      color: "#f4f4f4",
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
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
      maxWidth: "50%", // 100% devided by the number of rows you want
      alignItems: "center",
  
      // my visual styles; not important for the grid
      padding: 20,
      borderWidth: 1.5,
      borderRadius: 10,
      borderColor: "#F0F0F0",
    },
  };
  