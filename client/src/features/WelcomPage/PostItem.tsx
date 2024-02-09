/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import style from './style/postitem.modules.css';
// eslint-disable-next-line react/function-component-definition, arrow-body-style
const PostItem = (): JSX.Element => {
  return (
    // eslint-disable-next-line react/self-closing-comp
    <>
      <div className={style.containerOne}>
        <div className={style.containerTwo}>
          <div className={style.containerImg}></div>
          <div className={style.containerContent}>
            <div className={style.content}>
              <div className={style.left}>
                <div className={style.text}>
                  <div className={style.name}>
                    <p>James</p>
                    <p>@dev_james</p>
                  </div>
                  <p>
                    Crafting a simple notes app that syncs with local storage, and uses MD to write
                    note content but shortcuts make it much easier.
                  </p>
                </div>

                <div className={style.function}>
                  <div className={style.one}>
                    <img src="" alt="" />
                    <p>3</p>
                  </div>
                  <div className={style.two}>
                    <img src="" alt="" />
                    <p>12</p>
                  </div>
                  <div className={style.fre}>
                    <img src="" alt="" />
                    <p>156</p>
                  </div>
                </div>
                <div className={style.foo}>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className={style.freeTochka}> ...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
