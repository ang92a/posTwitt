import React, { useState } from 'react';
import style from './style/signPage.module.css';

function SignUpPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');

  return (
    <main>
      <div className={style.container}>
        <div className={style.containerImg} />
        <div className={style.containerForm}>
          <form className={style.signUp}>
            <h1>Регистрация PosTwitt</h1>
            <h4>Социальная сеть, для общения и обмена опытом среди разработчиков</h4>
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
            <p className={style.subText}>
              Уже eсть аккаунт? <a href="/sign-in">Войти</a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
