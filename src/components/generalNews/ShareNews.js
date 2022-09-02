import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './freeReaderPersuader.css';

const ShareNews = ({ next, previous }) => {
  const location = useLocation();
  const title = location.pathname.slice(
    location.pathname.lastIndexOf('/') + 1,
    location.pathname.length
  );
  const urlPath = location.pathname.split(' ').join('%20');

  return (
    <div className='next-prev-section'>
      <div className='news-social-icons'>
        <h5 className='slug-default mb-0'>Share this story</h5>
        <ul className='share-icons'>
          <li className='news-social-icons-items n-facebook'>
            <a
              href={`http://www.facebook.com/sharer.php?u=${
                'https://journal.africa/' + urlPath
              }`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li className='news-social-icons-items n-twitter'>
            <a
              href={`http://twitter.com/share?text=${title}&url=${
                'https://journal.africa/' + urlPath
              }&hashtags=#journalAfrica`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='news-social-icons-items n-instagram'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li className='news-social-icons-items n-whatsapp'>
            <a
              href={`whatsapp://send?text=<${
                'https://journal.africa/' + urlPath
              }>`}
              // href='whatsapp://send?text=<URL>'
              data-action='share/whatsapp/share'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-whatsapp'></i>
            </a>
          </li>
          <li className='news-social-icons-items n-linkedin'>
            <a
              href={`https://www.linkedin.com/shareArticle?url=${
                'https://journal.africa/' + urlPath
              }&title=${title}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className='next-or-prev-section'>
        <div className='previous'>
          {previous.slug ? (
            <div>
              <p className='previous-article'>Previous Article</p>
              <Link to={`/post/${previous.slug}`} className='prev-link'>
                {previous.slug}
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='next'>
          {next.slug ? (
            <div>
              <p className='next-article'>Next Article</p>
              <Link to={`/post/${next.slug}`} className='next-link'>
                {next.slug}
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default ShareNews;
