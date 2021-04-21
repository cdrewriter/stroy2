import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const Fullpage = ({ post }) => {
 // console.log(post)
  const { id, url, name, description, content, image } = post;

  return (
    <article className="post-detail xl:grid-cols-none bg-gray-100 dark:bg-gray-900 lg:my-12 lg:flex">



            <div className="dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div className="lg:w-1/2  p-16">
                    <div className="h-64 bg-cover lg:rounded-lg lg:h-full"
                         style={{backgroundImage: `url(${image.publicUrl}`}}></div>
                </div>

                <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 bg-white ">
                    <h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl">{name}</h2>
                    <span
                        className="text-gray-700 dark:gray-400">Услуги</span>
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
export default Fullpage;
