import "./style.scss";


import { Input, InputGroup } from "rsuite";
import api from "../../api";
import { useState } from "react";
import SearchIcon from '@rsuite/icons/Search';
import { NavLink } from "react-router-dom";

const data = api.provinceData;
const VNProvince = () => {
    const [input, setInput] = useState("");

    const newList = input ? data.filter(p => {
        const parent = p.name.toLowerCase();
        const child = input.trim().toLowerCase();
        return parent.includes(child)
    }) : data;

    return <div className="VNProvince">
        <div className="VN-provinces-container">
            <h3>Danh sách các tỉnh thành của Việt Nam</h3>
            <InputGroup className="search-input">
                <InputGroup.Addon>Tìm kiếm:</InputGroup.Addon>
                <Input
                    placeholder="..."
                    value={input}
                    onChange={(v) => setInput(v)}
                />
            </InputGroup>
            <div className="list-provinces">
                {!newList || !newList.length
                    ? <>Không tìm thấy tỉnh</>
                    : newList.map((c) => <NavLink to={`/admin/${c.id}/edit`} className="province-item" key={c.id}>{c.name}</NavLink>)}
            </div>
        </div>
    </div>
}

export default VNProvince;