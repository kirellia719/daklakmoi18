
import "./style.scss"

import VNMap from "../../assets/ban-do-vn-34-tinh.jpg";
import { Input, InputGroup, } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import ZoomableImage from "../../components/ZoomableImage"

import { useState } from "react";
import { NavLink } from "react-router-dom";

import dataTinhThanh from "../ThongTinTinh/dulieumoi";
const data = dataTinhThanh;

const VietNamMapPage = () => {


    const [input, setInput] = useState("");
    const newList = input ? data.filter(p => {
        const parent = p.name.toLowerCase();
        const child = input.trim().toLowerCase();
        return parent.includes(child)
    }) : data;
    return <div className="VietNamMapPage">
        <div className="page-container">
            <div className="map-left">
                <ZoomableImage src={VNMap} />
            </div>
            <div className="info-right">
                <InputGroup className="search-input">
                    <InputGroup.Addon>Tên tỉnh/thành:</InputGroup.Addon>
                    <Input placeholder="Tìm kiếm" value={input} onChange={(v) => setInput(v)} />
                    <InputGroup.Button>
                        <SearchIcon />
                    </InputGroup.Button>
                </InputGroup>

                <div className="province-container">
                    <div className="grid-container">
                        {!newList || !newList.length ? <>Không tìm thấy tỉnh</> : newList.map((c) => <NavLink to={`/tinh/${c.id}`} className="grid-item" key={c.id}>{c.name}</NavLink>)}
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default VietNamMapPage;