import { functionLog } from "./functionHelper";

const errorHandler = (error) => {
    functionLog('dari err handler >>>>>>>>>>>>>>' ,error ) 
  const { status } = error;

  let message = "Something is wrong with the server";
  switch (status) {
    case 400:
      message = "Login error, invalid password / email";
      break;
    case 401:
      message = "You are Unauthorized";
      break;
    case 404:
      message = "Data not found!";
      break;
  }
  return message;
};

export default errorHandler;
