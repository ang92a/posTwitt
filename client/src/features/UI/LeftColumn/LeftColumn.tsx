import React from 'react';
import { useSelector } from 'react-redux';
import style from './leftColumn.module.css';
import type { RootState } from '../../../redux/store';

function LeftColumn(): JSX.Element {
  const reating = useSelector((store: RootState) => store.reating.reating);
  console.log(reating);
  return (
    <div className={style.LeftColumn}>
      <p className={style.title}>Актуальные темы</p>
      {reating.map((el) => (
        <a key={el.id} href={`/profiles/${el.userId}`} className={style.topicLink}>
          #{el.content}
        </a>
      ))}
    </div>
  );
}

export default LeftColumn;
