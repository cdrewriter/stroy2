import react from "react";
import styles from "./Aside.module.scss";

const Item = ({ name, id, url }) => {
  return (
    <div className={styles.item} key={id}>
      <a href={`/uslugi/${url}`}>{name}</a>
    </div>
  );
};

function Aside({ catitems }) {
  console.log(catitems.length);
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
    return <aside className={styles.aside}>{asideItems}</aside>;
  }
return 'Loading...'
 
}

export default Aside;
