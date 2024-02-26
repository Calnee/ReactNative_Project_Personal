import api from '../network/api';

interface UserProp {
  UserId: string;
  jwtToken: string;
}

interface UserResponse {
  contact_name: string;
}

export async function User({
  UserId,
  jwtToken,
}: UserProp): Promise<UserResponse> {
  let contact_name: string = '';

  const userPayload = {
    user_id: UserId,
  };
  console.log('userPayload:', userPayload);
  console.log('jwt token.....', jwtToken);
  console.log('userId is....', UserId);

  try {
    const userResponse = await api.get('/api/v1/getContactList', {
      params: userPayload,
      headers: {Authorization: `Bearer ${jwtToken}`},
    });

    let userResp = userResponse.data;

    contact_name = userResp.fullName;

    console.log(userResp);
  } catch (error: any) {
    console.log('Error while fetching user information:', error);
    // return null;
  }

  return {
    contact_name,
  };
}
