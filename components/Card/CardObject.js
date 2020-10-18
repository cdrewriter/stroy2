import react from "react";
import styles from './Cardobject.module.css';

export default function BuildObjects({ data, buttons }) {

  return (    
      <div className={("cardobject " + styles.cardobject )}>
        <div className={("cardobject__img " + styles.imgobject)}>
          <img src="https://res.cloudinary.com/dpiuthi6q/image/upload/v1602605984/my-keystone-app/5f85d39fb9d853359033b83b.jpg" />
        </div>
        <div className={("cardobject__title " + styles.title)}>
          <h3>Двухэтажный дом из пеноблока и декоративного кирпича</h3>
        </div>
        <div className={("cardobject__desc " + styles.description)}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
            sit amet, consetetur sadipscing elitr, sed diam
          </p>
        </div>
        
      </div>  
  );
}
