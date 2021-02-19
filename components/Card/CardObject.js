import react from "react";
import styles from './CardObject.module.css';

export default function BuildObjects({ title, image, description }) {
    function inHtml() {
        return  <div className={("cardobject__desc " + styles.description)} dangerouslySetInnerHTML={{__html: `${description}`}}/>;
    }
  return (

      <div className={("cardobject " + styles.cardobject )}>
        <div className={("cardobject__img ")}>
          <img src={image} className={styles.imgobject}/>
        </div>
        <div className={("cardobject__content " + styles.title)}>
          <h3>{title}</h3>
            <hr className='px-20 mt-4 mb-8'/>
            {inHtml()}
            <a href={'#'} className={'btn'} >Подробнее</a>
        </div>




        
      </div>  
  );
}
