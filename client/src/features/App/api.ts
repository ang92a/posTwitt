import { User } from '../Sign/types';

export const fetchCheckUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  const data: { user: User } = (await res.json()) as { user: User };
  return data.user;
};

export const fetchLoadProfiles = async (): Promise<User[]> => {
  const res = await fetch('/api/profiles/');
  const data: { profiles: User[] } = (await res.json()) as {
    profiles: User[];
  };
  console.log(data.profiles);

  return data.profiles;
};
