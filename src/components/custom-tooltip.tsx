import React from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap";

type Props = {
    placement: any,
    title: string,
    children: React.ReactElement,
}

const CustomTooltip: React.FC<Props> = ({placement, title, children}) => {


    return (
        <OverlayTrigger placement={placement} overlay={(
            <Tooltip id="tooltip" className={"custom-tooltip ks_kh_lbl"} style={{display:`${title==''&&'none'}`}}>
                <div dangerouslySetInnerHTML={{ __html: title}} />
            </Tooltip>
        )}>
            {
                (props) => React.cloneElement(children, props)
            }
        </OverlayTrigger>
    );
};

export default CustomTooltip;
