import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import load from './assets/Rolling-1s-200px.svg';
import { store, type RootState } from '../../../redux/store';

import PostItem from '../../UI/PostItem/PostItem';
import style from './Style/profilePage.module.css';

function ProfilePage(): JSX.Element {
  const { profiles } = useSelector((store: RootState) => store.profiles);
  const { profileId } = useParams();
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();
  const loading = useSelector((store: RootState) => store.profiles.loading);

  const allPosts = useSelector((store: RootState) => store.posts.posts);
  const userPosts = allPosts.filter((post) => profileId && post.userId === +profileId);
  const currentProfile = profileId && profiles.find((profile) => profile.id === +profileId);

  const content = currentProfile && (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.user_page}>
          <div className={style.user_info}>
            <div className={style.user_photo}>
              <span className={style.circle_ava}>
                <img src={currentProfile.img} alt="User Avatar" />
              </span>
            </div>
            <div className={style.user_row}>
              <div style={{ display: 'flex' }}>
                <p className={style.user_name}>{currentProfile.name}</p>
                <p className={style.user_email}>{currentProfile.email}</p>
              </div>
              <div className={style.user_count}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h3 className={style.user_posts_count}>{userPosts.length}</h3>
                  <p>Постов</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <h3 className={style.user_followers_count}>123</h3>
                  <p>Подписчиков</p>
                </div>
                {user?.id !== currentProfile.id && (
                  <div className={style.contact_with_user}>
                    <div>
                      <button type="button" onClick={() => navigate(`/chat/${currentProfile.id}`)}>
                        Чат
                      </button>
                    </div>
                    <div>
                      <button>Подписаться</button>
                    </div>
                  </div>
                )}
              </div>
              <div className={style.user_details}>
                <p>
                  <strong>Город:</strong> {currentProfile.city}
                </p>
                <p>
                  <strong>Контакт:</strong> {currentProfile.contact}
                </p>
                <p>
                  <strong>Дата рождения:</strong> {currentProfile.birthDate}
                </p>
              </div>
            </div>
          </div>
          <div className={style.users_public_h}>
            <h3>Публикации пользователя</h3>
          </div>
          <div className={style.user_posts}>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <div className={style.wrapper}>
      <div className={style.content}>{loading ? <img src={load} alt="Loading..." /> : content}</div>
    </div>
  );
}

export default ProfilePage;
