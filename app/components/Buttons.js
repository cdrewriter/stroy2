import {Chevron} from "./Icons/Chevron";

export const IconArrowDown = (props) => {
    return (
        <div className={props.className}>
            <a className="mx-auto flex flex-col border-0 text-transparent next block transform hover:translate-y-4 duration-500 text-center font-bold uppercase transparent tracking-wider"  href="#">

                Далее
                <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" width="49.672" height="30.615" viewBox="0 0 49.672 30.615">
                    <g id="arrow-down" transform="translate(5.657 5.657)">
                        <line id="line" y1="26.87" transform="translate(19.358 19.104) rotate(-135)" fill="none" stroke="#fca311" strokeLinecap="round" strokeWidth="8"/>
                        <path id="line-2" data-name="line" d="M27.3,0H0" transform="translate(19.302 19.302) rotate(-135)" fill="none" stroke="#fca311" strokeLinecap="round" strokeWidth="8"/>
                    </g>
                </svg>
            </a>

        </div>
    )
}
export const IconCalc = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path id="Контур_150"  d="M9-7.5a1.442,1.442,0,0,1,1.055.445A1.442,1.442,0,0,1,10.5-6V1.5a1.442,1.442,0,0,1-.445,1.055A1.442,1.442,0,0,1,9,3H1.5A1.442,1.442,0,0,1,.445,2.555,1.442,1.442,0,0,1,0,1.5V-6A1.442,1.442,0,0,1,.445-7.055,1.442,1.442,0,0,1,1.5-7.5ZM7.641-.937,6.328-2.25,7.641-3.562a.5.5,0,0,0,.094-.281.5.5,0,0,0-.094-.281l-.516-.516a.5.5,0,0,0-.281-.094.5.5,0,0,0-.281.094L5.25-3.328,3.938-4.641a.5.5,0,0,0-.281-.094.5.5,0,0,0-.281.094l-.516.516a.5.5,0,0,0-.094.281.5.5,0,0,0,.094.281L4.172-2.25,2.859-.937a.5.5,0,0,0-.094.281.5.5,0,0,0,.094.281l.516.516a.5.5,0,0,0,.281.094A.5.5,0,0,0,3.938.141L5.25-1.172,6.563.141a.5.5,0,0,0,.281.094A.5.5,0,0,0,7.125.141l.516-.516a.5.5,0,0,0,.094-.281A.5.5,0,0,0,7.641-.937ZM22.5-21a1.442,1.442,0,0,1,1.055.445A1.442,1.442,0,0,1,24-19.5V-12a1.442,1.442,0,0,1-.445,1.055A1.442,1.442,0,0,1,22.5-10.5H15a1.442,1.442,0,0,1-1.055-.445A1.442,1.442,0,0,1,13.5-12v-7.5a1.442,1.442,0,0,1,.445-1.055A1.442,1.442,0,0,1,15-21Zm-.75,5.625v-.75a.358.358,0,0,0-.117-.258.358.358,0,0,0-.258-.117H19.5v-1.875a.358.358,0,0,0-.117-.258.358.358,0,0,0-.258-.117h-.75a.358.358,0,0,0-.258.117.358.358,0,0,0-.117.258V-16.5H16.125a.358.358,0,0,0-.258.117.358.358,0,0,0-.117.258v.75a.358.358,0,0,0,.117.258.358.358,0,0,0,.258.117H18v1.875a.358.358,0,0,0,.117.258.358.358,0,0,0,.258.117h.75a.358.358,0,0,0,.258-.117.358.358,0,0,0,.117-.258V-15h1.875a.358.358,0,0,0,.258-.117A.358.358,0,0,0,21.75-15.375ZM22.5-7.5a1.442,1.442,0,0,1,1.055.445A1.442,1.442,0,0,1,24-6V1.5a1.442,1.442,0,0,1-.445,1.055A1.442,1.442,0,0,1,22.5,3H15a1.442,1.442,0,0,1-1.055-.445A1.442,1.442,0,0,1,13.5,1.5V-6a1.442,1.442,0,0,1,.445-1.055A1.442,1.442,0,0,1,15-7.5ZM21.75-.375v-.75a.358.358,0,0,0-.117-.258.358.358,0,0,0-.258-.117h-5.25a.358.358,0,0,0-.258.117.358.358,0,0,0-.117.258v.75a.358.358,0,0,0,.117.258A.358.358,0,0,0,16.125,0h5.25a.358.358,0,0,0,.258-.117A.358.358,0,0,0,21.75-.375Zm0-3v-.75a.358.358,0,0,0-.117-.258.358.358,0,0,0-.258-.117h-5.25a.358.358,0,0,0-.258.117.358.358,0,0,0-.117.258v.75a.358.358,0,0,0,.117.258A.358.358,0,0,0,16.125-3h5.25a.358.358,0,0,0,.258-.117A.358.358,0,0,0,21.75-3.375ZM9-21a1.442,1.442,0,0,1,1.055.445A1.442,1.442,0,0,1,10.5-19.5V-12a1.442,1.442,0,0,1-.445,1.055A1.442,1.442,0,0,1,9-10.5H1.5a1.442,1.442,0,0,1-1.055-.445A1.442,1.442,0,0,1,0-12v-7.5a1.442,1.442,0,0,1,.445-1.055A1.442,1.442,0,0,1,1.5-21Zm-.75,5.625v-.75a.358.358,0,0,0-.117-.258.358.358,0,0,0-.258-.117H2.625a.358.358,0,0,0-.258.117.358.358,0,0,0-.117.258v.75a.358.358,0,0,0,.117.258A.358.358,0,0,0,2.625-15h5.25a.358.358,0,0,0,.258-.117A.358.358,0,0,0,8.25-15.375Z" transform="translate(0 21)" fill="#f6f6f6"/>
        </svg>
    )
}
export const IconArrowRight = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13.955" height="21.692" viewBox="0 0 13.955 21.692">
            <g id="Сгруппировать_213" transform="translate(-334.143 -5.982)">
                <g id="Chevron" transform="translate(336.863 27.566) rotate(-135)">
                    <g id="Сгруппировать_199"  transform="translate(0 0)">
                        <path id="Контур_74"  d="M0,14.71C0,11.308.425,0,.425,0" transform="translate(0 13.814) rotate(-90)" fill="none" stroke="" strokeWidth="4"/>
                        <path id="Контур_4" d="M13.436,0H0" transform="translate(1.847 13.436) rotate(-90)" fill="none" stroke="" strokeWidth="4"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
export const Icons = () => {
    return (
        <div className="space-y-8 mb-6">
            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Primary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
                >
                    Secondary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                >
                    Success
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                >
                    Danger
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                >
                    Warning
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none"
                >
                    Info
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
                >
                    Light
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
                >
                    Dark
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 underline uppercase transition bg-transparent rounded ripple hover:text-blue-900 focus:outline-none"
                >
                    Link
                </button>
            </div>
            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Primary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded-full shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
                >
                    Secondary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                >
                    Success
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                >
                    Danger
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-yellow-500 rounded-full shadow ripple hover:shadow-lg hover:bg-yellow-600 focus:outline-none"
                >
                    Warning
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded-full shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none"
                >
                    Info
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none"
                >
                    Light
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded-full shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black"
                >
                    Dark
                </button>
            </div>
            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded ripple hover:bg-blue-100 focus:outline-none"
                >
                    Primary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-pink-500 uppercase transition bg-transparent border-2 border-pink-500 rounded ripple hover:bg-pink-100 focus:outline-none"
                >
                    Secondary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-100 focus:outline-none"
                >
                    Success
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-red-500 uppercase transition bg-transparent border-2 border-red-500 rounded ripple hover:bg-red-100 focus:outline-none"
                >
                    Danger
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded ripple hover:bg-yellow-100 focus:outline-none"
                >
                    Warning
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded ripple hover:bg-indigo-100 focus:outline-none"
                >
                    Info
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded ripple hover:bg-gray-100 focus:outline-none"
                >
                    Dark
                </button>
            </div>
            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full ripple hover:bg-blue-100 focus:outline-none"
                >
                    Primary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-pink-500 uppercase transition bg-transparent border-2 border-pink-500 rounded-full ripple hover:bg-pink-100 focus:outline-none"
                >
                    Secondary
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded-full ripple hover:bg-green-100 focus:outline-none"
                >
                    Success
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-red-500 uppercase transition bg-transparent border-2 border-red-500 rounded-full ripple hover:bg-red-100 focus:outline-none"
                >
                    Danger
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none"
                >
                    Warning
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded-full ripple hover:bg-indigo-100 focus:outline-none"
                >
                    Info
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-transparent border-2 border-black rounded-full ripple hover:bg-gray-100 focus:outline-none"
                >
                    Dark
                </button>
            </div>

            <div className="m-6 space-x-3">
                <button
                    className="inline-block p-3 text-center text-white transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    className="inline-block p-3 text-center text-white transition bg-red-500 rounded-full shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                >
                    <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path
                            fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <button
                    className="inline-block p-3 text-center text-white transition border border-yellow-500 rounded-full ripple hover:bg-yellow-100 focus:outline-none"
                >
                    <svg
                        className="w-5 h-5 text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </button>
            </div>


            <div className="m-6 space-x-3">

                <button
                    className="inline-block px-4 py-2 text-center text-white transition bg-black rounded shadow ripple waves-light hover:shadow-lg hover:bg-black focus:outline-none"
                >
                    <svg className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                    </svg>
                </button>


                <button
                    className="inline-block px-4 py-2 text-center text-white transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
                >
                    <svg className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                        />
                    </svg>
                </button>
            </div>

            <div className="m-6 space-y-3 w-72">
                <button
                    className="block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Primary
                </button>
                <button
                    className="block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-pink-500 rounded shadow ripple hover:shadow-lg hover:bg-pink-600 focus:outline-none"
                >
                    Secondary
                </button>
            </div>

            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-4 py-2 text-xs font-medium text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-4 py-2 text-xs font-medium text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 font-medium leading-7 text-center text-white uppercase transition bg-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                >
                    Button
                </button>
            </div>
            <div className="m-6 space-x-3 space-y-3">
                <button
                    className="inline-block px-4 py-2 text-xs font-medium text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 font-medium leading-7 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-4 py-2 text-xs font-medium text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
                <button
                    className="inline-block px-6 py-2 font-medium leading-7 text-center text-blue-700 uppercase transition bg-transparent border-2 border-blue-700 rounded-full shadow ripple hover:shadow-lg hover:bg-blue-100 focus:outline-none"
                >
                    Button
                </button>
            </div>

        </div>

    )
}
