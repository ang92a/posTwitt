import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import style from './style/signPage.module.css';
import { useNavigate } from 'react-router-dom';
// import signImage from './assets/signImage.jpg';

function SignInPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');

  const dispatch = useAppDispatch();
  const error = useSelector((store: RootState) => store.auth.error);
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <main>
      <div className={style.container}>
        <div className={style.containerImg}>{/* <img src={signImage} alt="image" /> */}</div>
        <div className={style.containerForm}>
          <form
            className={style.signIn}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(signIn({ email, password })).catch(console.log);
            }}
          >
            <h1>Вход PosTwitt</h1>
            <h4>Социальная сеть, для общения и обмена опытом среди разработчиков</h4>
            {error && <p>{error}</p>}
            <div>
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPasssword(e.target.value)}
                placeholder="Введите ваш пароль"
              />
            </div>
            <button type="submit" className={style.btn}>
              Вход
            </button>
          </form>
          <p className={style.subText}>
            Нет аккаунта? <a href="/sign-up">Создать аккаунт</a>
          </p>
          <p className={style.subText}>
            После регистрации вы получите доступ ко всем возможностям PosTwitt
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
