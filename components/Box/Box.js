import react from "react";
import styles from './Box.module.scss';

function Box({children ,type}) {
    console.log(type)
    return (
        <div  className={'box ' + type}>
            {children}
        </div>
    )
}
export default Box