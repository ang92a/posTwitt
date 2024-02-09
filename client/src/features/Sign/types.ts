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

// export type UserSignIn = Omit<User, 'id' | 'img'>;

// export type UserSignUp = Omit<User, 'id'> & { rpassword: string };

// export type UserWithOutId = Omit<User, 'id'>;
