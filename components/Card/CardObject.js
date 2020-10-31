import react from "react";
import styles from './Cardobject.module.css';

export default function BuildObjects({ title, image, description }) {

  return (    
      <div className={("cardobject " + styles.cardobject )}>
        <div className={("cardobject__img " + styles.imgobject)}>
          <img src={image} />
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
