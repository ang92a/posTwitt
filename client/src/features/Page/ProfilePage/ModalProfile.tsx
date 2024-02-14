/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { editProfile } from './profileSlice';
import style from './Style/profilePage.module.css';
import type { User } from '../SignPage/types';
import { profileEdit } from '../WelcomPage/postsSlice';

export function ModalProfile({
  handleEditing,
  currentProfile,
}: {
  handleEditing: (value: boolean) => void;
  currentProfile: User;
}): JSX.Element {
  const dispatch = useAppDispatch();

  const [name, setName] = useState(currentProfile.name);
  const [email, setEmail] = useState(currentProfile.email);
  const [img, setImg] = useState<FileList | null>(null);
  const [city, setCity] = useState(currentProfile.city);
  const [contact, setContact] = useState(currentProfile.contact);
  const [birthDate, setBirthDate] = useState(currentProfile.birthDate);
  const onHandleEditProfile = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('city', city);
    formData.append('contact', contact);
    formData.append('birthDate', birthDate);
    if (img) {
      formData.append('img', img[0]);
    }
    dispatch(editProfile(formData))
      .then((data: any) => dispatch(profileEdit(data.payload)))
      .catch(console.log);
    handleEditing(false);
  };

  // const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const formattedDate = formatBirthdate(event.target.value);
  //   setBirthDate(formattedDate);
  // };

  // const formatBirthdate = (value: string) => value
  //     .replace(/\D/g, '')
  //     .replace(/(\d{2})(\d{2})(\d{4})/, '$1.$2.$3')
  //     .substr(0, 10);

  return (
    <div className={style.modalBackground}>
      <div className={style.modalContent}>
        <h2>Редактировать профиль</h2>
        <form className={style.profile_edit_form} onSubmit={onHandleEditProfile}>
          <input
            defaultValue={currentProfile.name}
            type="text"
            placeholder="Новое имя"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            defaultValue={currentProfile.email}
            type="text"
            placeholder="Новый email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <label htmlFor="avatar">
              Ваше фото
              <input
                // defaultValue={img || ''}
                defaultValue={img ? '' : undefined}
                style={{ marginLeft: '20px' }}
                id="avatar"
                type="file"
                placeholder="Ваше фото"
                onChange={(e) => setImg(e.target.files)}
              />
            </label>
          </div>
          <input
            defaultValue={currentProfile.city}
            type="text"
            placeholder="Новый город"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            defaultValue={currentProfile.contact}
            type="text"
            placeholder="Новый контакт"
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            defaultValue={currentProfile.birthDate}
            type="text"
            maxLength={10}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="Новая дата рождения"
          />
          <button type="button" onClick={() => handleEditing(false)}>
            Закрыть
          </button>
          <button type="submit">Сохранить изменения</button>
        </form>
      </div>
    </div>
  );
}
