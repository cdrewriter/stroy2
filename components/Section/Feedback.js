import Section from "./Section";
import Flip from "../Flip/Flip";

export default function FeedbackSection() {
 
    return (
      <Section key="feedback" className="feddback">
          <div className=" lg:mx-auto bg-local ">
            <div className="p-4  bg-feedback-pattern">
              <div className="container mx-auto block__custom">
                <div className="flex flex-col flex-wrap justify-between md:flex-row my-12">
                  <div className="box w-1/4">
                    <div className="titlebox mb-12">
                      <span className="section__textShaddow">
                        Мы открыты для диалога
                      </span>
                      <h2 className="section__title">Вопросы? Предложения? </h2>
                    </div>
                    <div className="icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="none"
                        className="h-12 w-12"
                        fillRule="none"
                        fill="#fca311"
                        width="25.708" height="48" viewBox="0 0 25.708 48"
                      >
                    
                       <path className="a" d="M26.169-15,27.5-23.687H19.167v-5.637c0-2.377,1.164-4.693,4.9-4.693h3.789v-7.4A46.213,46.213,0,0,0,21.128-42C14.263-42,9.776-37.839,9.776-30.308v6.621H2.146V-15h7.63V6h9.391V-15Z" transform="translate(-2.146 42)"/>

                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fillRule="none"   
                        fill="#fca311"
                         width="42.023" height="42.014" viewBox="0 0 42.023 42.014"><path className="a" d="M21.009-28.781A10.755,10.755,0,0,0,10.238-18.009,10.755,10.755,0,0,0,21.009-7.238,10.755,10.755,0,0,0,31.781-18.009,10.755,10.755,0,0,0,21.009-28.781Zm0,17.775a7.016,7.016,0,0,1-7-7,7.01,7.01,0,0,1,7-7,7.01,7.01,0,0,1,7,7A7.016,7.016,0,0,1,21.009-11.006ZM34.734-29.222a2.513,2.513,0,0,0-2.512-2.512,2.513,2.513,0,0,0-2.512,2.512,2.507,2.507,0,0,0,2.512,2.512A2.507,2.507,0,0,0,34.734-29.222Zm7.134,2.55c-.159-3.366-.928-6.347-3.394-8.8s-5.437-3.225-8.8-3.394c-3.469-.2-13.866-.2-17.334,0-3.356.159-6.337.928-8.8,3.384S.309-30.047.141-26.681c-.2,3.469-.2,13.866,0,17.334C.3-5.981,1.069-3,3.534-.544s5.438,3.225,8.8,3.394c3.469.2,13.866.2,17.334,0,3.366-.159,6.347-.928,8.8-3.394s3.225-5.437,3.394-8.8C42.066-12.816,42.066-23.2,41.869-26.672ZM37.387-5.625a7.09,7.09,0,0,1-3.994,3.994c-2.766,1.1-9.328.844-12.384.844s-9.628.244-12.384-.844A7.09,7.09,0,0,1,4.631-5.625c-1.1-2.766-.844-9.328-.844-12.384s-.244-9.628.844-12.384a7.09,7.09,0,0,1,3.994-3.994c2.766-1.1,9.328-.844,12.384-.844s9.628-.244,12.384.844a7.09,7.09,0,0,1,3.994,3.994c1.1,2.766.844,9.328.844,12.384S38.484-8.381,37.387-5.625Z" transform="translate(0.007 39.016)"/>
                      </svg>
                    </div>
                  </div>
                  <div className="box w-2/5 flex-end">
                    <form className="mb-6 w-full inline-block form border-2 rounded border-white-300 py-2">
                      <div className="flex items-center flex-end">
                        <input
                          className="appearance-none w-full m-auto bg-transparent input border-none  mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text"
                          placeholder="ваше сообщение"
                          aria-label="msg"
                        />
                        <button
                          className="flex-shrink-0 bg-teal-500 hover:bg-white-700 shadow text-sm border-4 text-white py-1 px-2 rounded"
                          type="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                          
                            className="h-6 w-6"
                            fillRule="none"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <text
                              transform="translate(0 21)"
                              fill="#14213d"
                              fontSize="24"
                              fontFamily="FontAwesome5Pro-Light, 'Font Awesome 5 Pro'"
                              fontWeight="300"
                            >
                              <tspan x="0" y="0">
                                envelope
                              </tspan>
                            </text>
                          </svg>
                        </button>
                      </div>
                    </form>

                    <div className="phone"><span>или</span> +7 951 478 2780</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
    );
  };
  