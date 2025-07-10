import "./style.scss"

import ZoomableImage from "../../components/ZoomableImage"
import DakLakMap from "./ban-do-dak-lak.jpg";
import PageEndIcon from '@rsuite/icons/PageEnd';
import phuongxaData from "./phuongxaData"
import { Button, Card, Input, InputGroup, List, Tag, TagGroup } from "rsuite";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function removeVietnameseTones(str) {
    return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // xóa dấu
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .toLowerCase();
}

function filterNames(list, keyword) {
    const normalizedKeyword = removeVietnameseTones(keyword);

    return list.filter(item =>
        removeVietnameseTones(item.name).includes(normalizedKeyword)
    );
}


const TrangDakLak = () => {
    const [input, setInput] = useState("");
    const newList = input ? filterNames(phuongxaData, input) : phuongxaData;

    return <div className="TrangDakLak">
        <div className="daklak-page-container">

            <div className="map">
                <ZoomableImage src={DakLakMap} />
            </div>
            <div className="ward-container">
                <Card shaded>
                    <Card.Header as="h2">
                        <div className="title">Danh sách các phường xã của tỉnh <span>Đăk Lăk</span></div>
                    </Card.Header>
                    <Card.Body>
                        <InputGroup>
                            <InputGroup.Addon>Tìm theo tên: </InputGroup.Addon>
                            <Input value={input} onChange={v => setInput(v)} placeholder="..." />
                        </InputGroup>
                    </Card.Body>
                    <Card.Body>
                        <div className="ward-list">
                            {newList.map(p => <Button appearance="link" key={p.name}><PageEndIcon /> <NavLink to={`ward/${p.id}`} className="ward-item" >{p.name}</NavLink></Button>)}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
}

export default TrangDakLak;