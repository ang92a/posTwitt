import React from 'react';
import load from './assets/Rolling-1s-200px.svg';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { type RootState } from '../../../redux/store';
import PostItem from '../../UI/PostItem/PostItem';
import style from './Style/profilePage.module.css';

function ProfilePage(): JSX.Element {
  const { profiles } = useSelector((store: RootState) => store.profiles);
  const { profileId } = useParams();

  const loading = useSelector((store: RootState) => store.profiles.loading);

  const allPosts = useSelector((store: RootState) => store.posts.posts);
  const userPosts = allPosts.filter((post) => profileId && post.userId === +profileId);

  const currentProfile = profileId && profiles.find((profile) => profile.id === +profileId);

  const content = currentProfile && (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.user_page}>
          <div className={style.user_info}>
            <span className={style.circle_ava}>
              <img src={currentProfile.img} />
            </span>
            <p className={style.user_name}>{currentProfile.name}</p>
            <p className={style.user_email}>{currentProfile.email}</p>
            <div className={style.user_count}>
              <p className={style.user_posts_count}>Постов: {userPosts.length}</p>
            </div>
          </div>
          <div className={style.user_posts}>
            {userPosts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className={style.right_panel}>
          <div className={style.hot_posts}></div>
        </div>
      </div>
    </main>
  );

  return <>{loading ? <img src={load} /> : content}</>;
}

export default ProfilePage;
