import api from '../network/api';
import {useNavigation} from '@react-navigation/native';
 
interface LogInUserProp {
  loginUserEmail: string;
  loginPassword: string;
}
 
interface LoginUserResponse {
  token: string;
  message: string;
  statusCode: string;
}
 
export async function loginUser({
  loginUserEmail,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let token: string = "";
  let message: string = "";
  let statusCode: string = "";
 
  const logInPayload = {
    user_email: loginUserEmail,
    password: loginPassword,
  };
  console.log(logInPayload);
 
  try {
    const logInResponse = await api.post(
      'userLogin',
      logInPayload,
    );
    let statusCode = logInResponse.status.toString();
    console.log(statusCode);
   
    let loginResp = logInResponse.data;
    console.log(loginResp);

  } catch (error: any) {
    console.log('Error while logging in:', error);

  }
 
  return {token, message, statusCode};
}