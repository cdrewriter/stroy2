import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({ post }) => {
 // console.log(post)
  const { id, url, name, description, content, image } = post;

  return (
    <article className="post-detail bg-gray-800 md:flex">


            <div className="group dark:bg-gray-700 md:flex  lg:rounded-lg relative">
                {/*<div className="lg:w-1/4  pl-4 py-16">*/}
                {/*    <div className="h-24 bg-contain bg-no-repeat lg:h-36"*/}
                {/*         style={{backgroundImage: `url(${image.publicUrl}`}}></div>*/}
                {/*</div>*/}

                <div className="py-8 px-6 max max-w-xl lg:max-w-5xl bg-white lg:shadow-lg group-hover:bg-transparent ">
                        <div className="h-24 bg-contain bg-center bg-no-repeat  group-hover:flex absolute top-0 bottom-0 center right-0 lg:w-1/5"
                             style={{backgroundImage: `url(${image.publicUrl}`}}></div>
                    <h3 className="text-2xl text-gray-800 dark:text-white group-hover:text-colorGray font-bold md:text-xl">{name}</h3>
                    {/*<span*/}
                    {/*    className="text-gray-700 dark:gray-400">Услуги</span>*/}
                    <div className="mt-4 lg:w-4/5 text-sm divide-double opacity-75 text-gray-800 max-h-full dark:text-gray-400 group-hover:text-transparent" dangerouslySetInnerHTML={{
                        __html: content,
                    }}></div>

                    <div className="hidden group-hover:flex absolute top-0 bottom-0 left-0 right-0">
                        <a href="#" className="border-white border-2 m-auto text-white px-12 py-4 font-semibold  hover:bg-colorPrimary hover:text-white hover:border-sorange hover:text-sorange hover:no-underline btn-uslugi">Далее</a>
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
