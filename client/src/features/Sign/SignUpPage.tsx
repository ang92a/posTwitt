import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useAppDispatch } from '../../redux/store';
import { signUp } from './authSlice';
import style from './style/signPage.module.css';
import { useNavigate } from 'react-router-dom';

function SignUpPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

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
        <div className={style.containerImg} />
        <div className={style.containerForm}>
          <form
            className={style.signUp}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(signUp({ name, email, password, rpassword })).catch(console.log);
            }}
          >
            <h1>Регистрация PosTwitt</h1>
            <h4>Социальная сеть, для общения и обмена опытом среди разработчиков</h4>
            {error && <p>{error}</p>}
            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Введите ваш email"
              />
            </div>
            <div>
              <input
                value={password}
                onChange={(e) => setPasssword(e.target.value)}
                type="password"
                placeholder="Придумайте пароль"
              />
            </div>
            <div>
              <input
                value={rpassword}
                onChange={(e) => setRpasssword(e.target.value)}
                type="password"
                placeholder="Повторите пароль"
              />
            </div>
            <button type="submit" className={style.btn}>
              Зарегистрироваться
            </button>
          </form>
          <p className={style.subText}>
            Уже eсть аккаунт? <a href="/sign-in">Войти</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
