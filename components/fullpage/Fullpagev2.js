import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({ post }) => {
 // console.log(post)
  const { id, url, name, description, content, image } = post;

  return (
    <article className="post-detail bg-gray-100 lg:flex">


            <div className="dark:bg-gray-800 lg:flex  lg:rounded-lg">
                <div className="lg:w-1/4  pl-16 py-16">
                    <div className="h-24 bg-contain bg-no-repeat lg:h-36"
                         style={{backgroundImage: `url(${image.publicUrl}`}}></div>
                </div>

                <div className="py-4 px-6 max-w-xl lg:max-w-5xl lg:w-3/4 bg-white lg:shadow-lg">
                    <h3 className="text-2xl text-gray-800 dark:text-white font-bold md:text-xl">{name}</h3>
                    {/*<span*/}
                    {/*    className="text-gray-700 dark:gray-400">Услуги</span>*/}
                    <p className="mt-4 text-gray-600 max-h-full dark:text-gray-400" dangerouslySetInnerHTML={{
                        __html: content,
                    }}></p>

                    <div className="mt-8">
                        <a href="#" className="border-sorange border-1 text-sorange px-5 py-3 font-semibold  hover:bg-sorange hover:text-white">Далее</a>
                    </div>
                </div>
            </div>


    </article>
  );
};

/*UslugiDetail.propTypes = {
  post: PropTypes.shape(postPropTypes).isRequired,
};
*/
export default FullPage;
