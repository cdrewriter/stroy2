import {IconArrowDown} from "../../components/Buttons";
import Box from "../../components/Box/Box";

const FirstScreen = ({title, titleText}) => {
    function inHtml() {
        return <div  className="text-white" dangerouslySetInnerHTML={{ __html: `${titleText}` }} />;
    }
    return (
    <div className={'onescreen'}>

        <Box type={'firstScreen  angle-outer-left angle-outer-right'}>
            <div className={'box_content angle-inner-left angle-inner-right'}>
                <h1>{title}</h1>
                <span className={'h1Subheading'}>{inHtml()}</span>
            </div>
        </Box>

        <IconArrowDown className={'icon_arrow_down'}/>
    </div>
    )
}

export default FirstScreen