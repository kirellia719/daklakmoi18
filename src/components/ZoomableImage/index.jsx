import "./style.scss";

import { ButtonGroup, ButtonToolbar, IconButton } from "rsuite";
import PlusIcon from '@rsuite/icons/Plus';
import MinusIcon from '@rsuite/icons/Minus';
import UndoIcon from '@rsuite/icons/Undo';
import {
    TransformWrapper,
    TransformComponent,
    useControls,
} from "react-zoom-pan-pinch";

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    return (
        <div className="tools">
            <ButtonToolbar>
                <ButtonGroup>
                    <IconButton onClick={() => zoomIn()} icon={<PlusIcon />} appearance="primary" />
                    <IconButton onClick={() => zoomOut()} icon={<MinusIcon />} appearance="primary" />
                    <IconButton onClick={() => resetTransform()} icon={<UndoIcon />} appearance="primary" />
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
};

const ZoomableImage = ({ src }) => {
    return <div className="ZoomableImage">
        <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
        >
            <TransformComponent>
                <img src={src} alt="" />
            </TransformComponent>
            <Controls />

        </TransformWrapper>
    </div>
}

export default ZoomableImage;