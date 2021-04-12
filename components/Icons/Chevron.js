function objToString(object) {
    var str = '';
    for (var k in object) {
        if (object.valueOf(k)) {
            str += object[k];
        }
    }
    console.log(str);
    return str;
}

export const Chevron = ({clme}) => {
    const cls = objToString(clme);
    console.log({cls})
    return (
        <svg className={`w-12 h-12 fill-current text-sorange  duration-500 ` + `${cls}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    )
}
