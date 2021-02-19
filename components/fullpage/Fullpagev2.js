import React from 'react';

//import PropTypes from 'prop-types';

//import { Image } from 'react-bootstrap';
//import { postPropTypes } from '../../types';

//import './PostDetail.scss';

const FullPage = ({post}) => {
    // console.log(post)
    const {id, url, name, description, content, image} = post;

    return (
        <article className="post-detail md:flex">


            <div className="  md:flex  lg:rounded-lg relative">
                {/*<div className="lg:w-1/4  pl-4 py-16">*/}
                {/*    <div className="h-24 bg-contain bg-no-repeat lg:h-36"*/}
                {/*         style={{backgroundImage: `url(${image.publicUrl}`}}></div>*/}
                {/*</div>*/}

                <div className="py-6  px-8 max max-w-xl flex flex-col justify-between lg:max-w-5xl bg-white lg:shadow-lg">
                    <div
                        className="h-24 bg-contain bg-center bg-no-repeat  group-hover:flex absolute top-0 bottom-0 center right-0 lg:w-1/5"
                        style={{backgroundImage: `url(${image.publicUrl}`}}></div>
                    <h3 className="text-2xl text-gray-800 dark:text-white  font-bold md:text-xl">{name}</h3>
                    {/*<span*/}
                    {/*    className="text-gray-700 dark:gray-400">Услуги</span>*/}
                    <div
                        className=" lg:w-4/5 text-sm divide-double opacity-75 pl-4 text-gray-700 max-h-full dark:text-gray-400 "
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}></div>

                    {/*<div className="hidden group-hover:flex absolute top-0 bottom-0 left-0 right-0">*/}
                    <div className="flex justify-self-end ">
                        <a href="#" className="btn btn-main hover:bg-transparent text-gray-600  hover:text-gray-700  mt-auto text-sm group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-transparent group-hover:text-current">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Подробнее</a>
                        <a href="#" className="btn btn-main  hover:bg-transparent text-gray-400  hover:text-gray-500 text-sm group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-transparent group-hover:text-current">
                                <path fill-rule="evenodd"
                                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                      clip-rule="evenodd"/>
                            </svg>
                            Стоимость</a>
                    </div>
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
