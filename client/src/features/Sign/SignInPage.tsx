import React from 'react';
import style from './style/signPage.module.css';
// import signImage from './assets/signImage.jpg';

function SignInPage(): JSX.Element {
  return (
    <main>
      <div className={style.container}>
        <div className={style.containerImg}>{/* <img src={signImage} alt="image" /> */}</div>
        <div className={style.containerForm}>
          <form className={style.signIn}>
            <h1>Вход PosTwitt</h1>
            <h4>Социальная сеть, для общения и обмена опытом среди разработчиков</h4>
            <div>
              <input name="email" type="text" id="inputEmail" placeholder="Введите ваш email" />
            </div>
            <div>
              <input
                name="password"
                type="password"
                id="inputPassword"
                placeholder="Введите ваш пароль"
              />
            </div>
            <button type="submit" className={style.btn}>
              Вход
            </button>
            <p className={style.subText}>
              Нет аккаунта?{' '}
              <a href="/sign-up">
                Создать аккаунт
              </a>
            </p>
            <p className={style.subText}>
              После регистрации вы получите доступ ко всем возможностям PosTwitt
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
