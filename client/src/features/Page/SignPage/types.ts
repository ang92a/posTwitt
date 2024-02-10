export type User = {
  id: number;
  name: string;
  email: string;
  img: string;
  password: string;
};

export type AuthState = {
  auth: User | undefined;
  error: string | undefined;
};


export type ProfileState = {
  profiles: User[];
  error: string | undefined;
  loading: boolean;
};

// export type UserSignIn = Omit<User, 'id' | 'img'>;

export type UserSignUp = Omit<User, 'id' | 'img'> & { rpassword: string };


export type UserSignIn = Omit<User, 'id' | 'img' | 'name'>;

// export type UserWithOutId = Omit<User, 'id'>;
