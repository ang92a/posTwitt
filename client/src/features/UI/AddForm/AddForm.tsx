/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './addForm.module.css';
import { useAppDispatch } from '../../../redux/store';
import type { RootState } from '../../../redux/store';
import { AddPosts } from '../../Page/WelcomPage/postsSlice';

const AddForm = (): JSX.Element => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const user = useSelector((store: RootState) => store.auth.auth);

  const dispatch = useAppDispatch();

  return (
    <div className={style.postForm}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          user &&
            dispatch(AddPosts({ title, content: text, userId: user.id, img: image })) // тут нужно поправить
              .then(() => {
                setText('');
                setTitle('');
              })
              .catch(console.log);
        }}
      >
        <textarea
          className={style.textarea}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="тема твитта, которая потом попадет в рейтинг... "
        />
        <textarea
          className={style.textarea}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Что нового, ${user?.name}?`}
        />
        <div className={style.footer}>
          <input
            type="file"
            className={style.input}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit" className={style.btn}>
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
