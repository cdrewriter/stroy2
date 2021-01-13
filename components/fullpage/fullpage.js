import React from 'react';
//import PropTypes from 'prop-types';

import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({ post }) => {
  console.log(post)
  const { id, url, name, description, content, image } = post;
  return (
    <article className="post-detail">
      <div className="post-detail__thumbnail">
        <Image src={image.publicUrlTransformed} alt={`Image of ${title}`} fluid />
      </div>
      <h3 className="post-detail__title">{name}{image.publicUrl}</h3>

      <div className="post-detail__description">
        <strong>{description}</strong>
      </div>

      <div
        className="post-detail__content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </article>
  );
};

/*UslugiDetail.propTypes = {
  post: PropTypes.shape(postPropTypes).isRequired,
};
*/
export default FullPage;
