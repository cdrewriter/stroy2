import Link from 'next/link';

const Item = ({ name, id, url }) => {
  return (
      <li  key={id} className="py-1 md:my-2  hover:border-sorange border-l-4 lg:hover:bg-transparent border-l-4 border-transparent">
          <Link href={`/uslugi/${url}`} id={id}>
              <a  className="block pl-4 align-middle text-gray-700 no-underline hover:text-sorange">{name}</a>
          </Link>
      </li>

  );
};

function Asiden({ catitems }) {
  //console.log(catitems.length);
  const asideItems = [];

  if (catitems && catitems.length) {
    for (let i = 0; i < catitems.length; ++i) {
      asideItems.push(
        <Item
          name={catitems[i].name}
          id={catitems[i].id}
          url={catitems[i].url}
        />
      );
    }
    return (

      <div className="w-full lg:w-1/4 px-l text-xl text-gray-800 leading-normal">

          <div className="block lg:hidden sticky inset-0">
              <button id="menu-toggle"
                      className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none">
                  <svg className="fill-current h-3 float-right" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
              </button>
          </div>
          <div className="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
              style={{top:'6em'}} id="menu-content">
              <h3 className="text-lg font-bold py-2 mt-8  text-gray-700">Меню</h3>
              <ul className="list-reset py-2 md:py-0">
                  {asideItems}


              </ul>
          </div>
      </div>


    )
  }
return 'Loading...'
 
};

export default Asiden;
