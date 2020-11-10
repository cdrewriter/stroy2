import React from 'react';
//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const UslugiDetail = ({ post }) => {
  const { slug, id, image, title, description, content } = post;
  return (
    <article className="post-detail">
      <div className="post-detail__thumbnail">
        {/*<Image src={image.publicUrl} alt={`Image of ${title}`} fluid />*/}
      </div>
      <h3 className="post-detail__title">{title}</h3>

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
export default UslugiDetail;
