import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import load from './assets/Rolling-1s-200px.svg';
import { store, type RootState, useAppDispatch } from '../../../redux/store';
import PostItem from '../../UI/PostItem/PostItem';
import style from './Style/profilePage.module.css';
import { User } from '../SignPage/types';

function ProfilePage(): JSX.Element {
  const { profiles } = useSelector((store: RootState) => store.profiles);
  const { profileId } = useParams();
  const currentProfile = profileId && profiles.find((profile) => profile.id === +profileId);
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const loading = useSelector((store: RootState) => store.profiles.loading);
  const dispatch = useAppDispatch();

  const allPosts = useSelector((store: RootState) => store.posts.posts);
  const userPosts = allPosts.filter((post) => profileId && post.userId === +profileId);

  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [img, setImg] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [birthDate, setBirthDate] = useState('');

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
                <p className={style.user_email}>
                  {currentProfile.email}
                  {user?.id === currentProfile.id && (
                    <span className={style.edit_icon} onClick={handleEditClick}>
                      ✏️
                    </span>
                  )}
                </p>
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
              {currentProfile.city && currentProfile.contact && currentProfile.birthDate && (
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
              )}
            </div>
          </div>
          {userPosts.length > 0 && (
            <div className={style.users_public_h}>
              <h3>Публикации пользователя</h3>
            </div>
          )}

          <div className={style.user_posts}>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );

  const renderEditModal = (currentProfile) => {
    return (
      <div className={style.modalBackground}>
        <div className={style.modalContent}>
          <form
            className={style.profile_edit_form}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(profileEdit({ name, email, img, city, contact, birthDate })).catch(
                console.log,
              );
            }}
          >
            <h2>Редактировать профиль</h2>
            <input
              value={currentProfile.name}
              type="text"
              placeholder="Новое имя"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              value={currentProfile.email}
              type="text"
              placeholder="Новый email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <label htmlFor="avatar">
                Ваше фото
                <input
                  value={img}
                  style={{ marginLeft: '20px' }}
                  id="avatar"
                  type="file"
                  placeholder="Ваше фото"
                  onChange={(e) => setImg(e.target.value)}
                />
              </label>
            </div>
            <input
              value={currentProfile.city}
              type="text"
              placeholder="Новый город"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              value={currentProfile.contact}
              type="text"
              placeholder="Новый контакт"
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              value={currentProfile.birthDate}
              type="text"
              maxLength="10"
              onChange={handleBirthdateChange}
              placeholder="Новая дата рождения"
            />
            <button onClick={() => setIsEditing(false)}>Закрыть</button>
            <button type="submit">Сохранить изменения</button>
          </form>
        </div>
      </div>
    );
  };
  const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedDate = formatBirthdate(event.target.value);
    setBirthDate(formattedDate);
  };

  const formatBirthdate = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3')
      .substr(0, 10);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>{loading ? <img src={load} alt="Loading..." /> : content}</div>
      {isEditing && renderEditModal(currentProfile)}
    </div>
  );
}

export default ProfilePage;
