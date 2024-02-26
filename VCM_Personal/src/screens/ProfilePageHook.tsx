import api from '../network/api';

interface ProfileUserProp {
  profileUserId: string;
}

interface ProfileUserResponse {
  fullName: string;
  email: string;
  totalContacts: string;
  totalAcceptedCards: string;
  totalPendingCards: string;
}

export async function loginUser({
  profileUserId,
}: ProfileUserProp): Promise<ProfileUserResponse | null> {
  let fullName: string = '';
  let email: string = '';
  let totalContacts: string = '';
  let totalAcceptedCards: string = '';
  let totalPendingCards: string = '';

  const profilePayload = {
    user_id: profileUserId,
  };
  console.log('profilePayload:',profilePayload);

  try {
    const profileResponse = await api.get('getProfile', {params:profilePayload});

    let profileResp = profileResponse.data;

    fullName = profileResp.fullName;
    email = profileResp.email; // Update to the correct property from the API response
    totalContacts = profileResp.totalContacts;
    totalAcceptedCards = profileResp.totalAcceptedCards;
    totalPendingCards = profileResp.totalPendingCards;

    console.log(profileResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    return null; // Return null in case of an error
  }

  return {
    fullName,
    email,
    totalContacts,
    totalAcceptedCards,
    totalPendingCards,
  };
}
