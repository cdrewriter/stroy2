import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({post}) => {
    // console.log(post)
    const {id, url, name, postCategories, description, content, image} = post;

    return (
        <article className="uslugi-list">

            <div className="uslugi-subtitle">
                <span className="font-semibold title-font text-gray-700">{postCategories.title}</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>


            <h2 className="uslugi-title">{name}</h2>
            <p className="uslugi-desc" dangerouslySetInnerHTML={{
                __html: content,
            }}>

            </p>
            <div className="uslugi-link">
                <div className="uslugi-link-inner">
                    <a href="#"
                       className="btn btn-icon text-sm  hover:text-sorange   hover:bg-transparent font-semibold mt-auto flex-1 ">
                        <span className="block  ico">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd">

                                </path>
                            </svg>
                        </span>
                        <span
                            className="hidden group-hover:block pl-2 group-hover:text-colorPrimary">Подробнее</span>
                    </a>
                    <a href="#"
                       className="btn btn-icon text-sm hover:border-transparent border-0  hover:text-sorange hover:bg-transparent hover:text-white font-semibold mt-auto flex-1"><span
                        className="block ico">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </span>
                        <span className="hidden group-hover:block text-colorPrimary group-hover:text-gray-700 pl-2 ">Нами построено</span></a>
                </div>
            </div>
            <div className="uslugi-img" style={{backgroundImage: `url(${image.publicUrl}`}}></div>


        </article>
    );
};

/*UslugiDetail.propTypes = {
  post: PropTypes.shape(postPropTypes).isRequired,
};
*/
export default FullPage;
