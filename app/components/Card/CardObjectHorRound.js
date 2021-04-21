import react from "react";
import styles from './CardObject.module.css';

export default function BuildObjects({ title, image, description }) {
    function inHtml() {
        return  <div className={("cardobject__desc " + styles.description)} dangerouslySetInnerHTML={{__html: `${description}`}}/>;
    }
  return (
      <div className="card card-side bordered">
          <figure className="lg:w-1/3">
              <img src="https://picsum.photos/id/1005/600/400">
          </figure>
          <div className="lg:w-2/3 card-body">
              <h2 className="card-title">Horizontal</h2>
              <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                  molestiae voluptates incidunt iure sapiente.</p>
              <div className="space-x-2 card-actions">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-ghost">More info</button>
              </div>
          </div>
      </div>
    <div className="card card-side bordered">
        <figure className="lg:w-1/3">
            <img src="https://picsum.photos/id/1005/600/400">
        </figure>
        <div className="lg:w-2/3 card-body">
            <h2 className="card-title">Horizontal
                <div className="badge mx-2">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed
                molestiae voluptates incidunt iure sapiente.</p>
            <div className="space-x-2 card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost">More info</button>
            </div>
        </div>
    </div>
      <div className={("cardobject " + styles.cardobject )}>
        <div className={("cardobject__img ")}>
          <img src={image} className={styles.imgobject}/>
        </div>
        <div className={("cardobject__content " + styles.title)}>
          <h3>{title}</h3>
            <hr className='px-20 mt-4 mb-12'/>
            {inHtml()}
            <a href={'#'} className={'btn'} >Подробнее</a>
        </div>




        
      </div>  
  );
}
