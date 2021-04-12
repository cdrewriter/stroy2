import {IconArrowDown} from "../../components/Buttons";
import Box from "../../components/Box/Box";

const FirstScreen = () => {
    return (
    <div className={'onescreen'}>

        <Box type={'firstScreen  angle-outer-left angle-outer-right'}>
            <div className={'box_content angle-inner-left angle-inner-right'}>
                <h1>Строительство</h1>
                <span className={'h1Subheading'}>промышленных зданий и крупных производственных объектов</span>
            </div>
        </Box>
        <IconArrowDown className={'icon_arrow_down'}/>
    </div>
    )
}

export default FirstScreen