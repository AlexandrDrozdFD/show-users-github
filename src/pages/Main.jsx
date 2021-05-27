import React from 'react';
import following from '../following.svg';
import followers from '../followers.svg';
import {Empty} from "../components/Empty";

const Main = ({data, repositories}) => {

  return (
    <div className='main-page'>
      <div className="main-page__user">
        <div className="user-img">
          <img src={data.avatar_url} alt="avatar" className="user-img__photo"/>
        </div>
        <div className="user-name">{data.name}</div>
        <a href={data.html_url} className="user-link" target="_blank" rel="noreferrer">{data.login}</a>

        <div className="user-tracking">

          <div className="user-followers">
            <div className="user-followers__icon">
              <img src={followers} alt="followers"/>
            </div>
            <div>{data.followers} followers</div>
          </div>
          <div className="user-following">
            <div className="user-following__icon">
              <img src={following} alt="following"/>
            </div>
            <div>{data.following} following</div>
          </div>
        </div>
      </div>
      <div className="main-page__repos">
        {
          !repositories.length
            ?
            ''
            :
            <div className="repos-counter">Repositories ({repositories.length})</div>
        }

        {
          repositories.length === 0
            ?
            <Empty />
            :
            <div className="repos-container">
              {repositories.map((repo) => {
                return (
                  <div className="repo" key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">{repo.name}</a>
                    <p className="repo-description">{repo.description}</p>
                  </div>
                );
              })}
            </div>
        }

      </div>

    </div>
  )
}

export default Main;