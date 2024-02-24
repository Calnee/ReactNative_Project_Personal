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
  user_id: string;
}

export async function loginUser({
  loginUserEmail,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let token: string = '';
  let message: string = '';
  let statusCode: string = '';
  let user_id: string ='';

  const logInPayload = {
    user_email: loginUserEmail,
    password: loginPassword,
  };
  console.log(logInPayload);

  try {
    const logInResponse = await api.post('userLogin', logInPayload);
    statusCode = logInResponse.status.toString();
    console.log(statusCode);

    let loginResp = logInResponse.data;
    message = loginResp.message;
    token = loginResp.token;
    console.log(loginResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
  }

  return {token, message, statusCode,user_id};
}
