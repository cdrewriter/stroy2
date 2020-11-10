import react from "react";
import styles from './CardObject.module.css';

export default function BuildObjects({ title, image, description }) {

  return (    
      <div className={("cardobject " + styles.cardobject )}>
        <div className={("cardobject__img ")}>
          <img src={image} className={styles.imgobject}/>
        </div>
        <div className={("cardobject__title " + styles.title)}>
          <h3>{title}</h3>
        </div>
        <div className={("cardobject__desc " + styles.description)}>
          <p>
            {description}
          </p>
        </div>
        
      </div>  
  );
}
