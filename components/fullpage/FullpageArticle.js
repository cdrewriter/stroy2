import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({ post }) => {
 // console.log(post)
  const { id, url, name, postCategories, description, content, image } = post;

  return (
    <article className="post-detail divide-y-2 divide-gray-100 xl:grid-cols-none lg:my-12 lg:flex">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="flex flex-col">
                <span className="font-semibold title-font text-gray-700">{postCategories.title}</span>
                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div>

                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{name}</h2>
                <p className="mt-4 text-gray-600 max-h-full dark:text-gray-400" dangerouslySetInnerHTML={{
                    __html: content,
                }}></p>
                <a href={'#'} className="btn btn-icon mt-4 border-sorange border-0 text-sorange pr-5 py-3 font-semibold  hover:bg-sorange hover:text-white">Далее
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                         fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
           
        </div>


            <div className="dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
         

                <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 bg-white ">
                    {/*<h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl">{name}</h2>*/}
                
                        <div className="h-32 w-32 bg-cover lg:rounded-lg lg:h-full"
                             style={{backgroundImage: `url(${image.publicUrl}`}}></div>
                   
                    {/*<span*/}
                    {/*    className="text-gray-700 dark:gray-400">Услуги</span>*/}
          

                    {/*<div className="mt-8">*/}
                    {/*    <a href="#" className="border-sorange border-1 text-sorange px-5 py-3 font-semibold  hover:bg-sorange hover:text-white">Далее</a>*/}
                    {/*</div>*/}
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
