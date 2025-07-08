import "./style.scss";


import { Button, Input, InputGroup, Message, useToaster } from "rsuite";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import TextEditor from "../../components/TextEditor";
const BE_URL = import.meta.env.VITE_BE_URL;
const EditProvince = () => {
    const { id } = useParams();
    const [province, setProvince] = useState(null);
    const toaster = useToaster();

    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get(`${BE_URL}/province/${id}`);
                setProvince(data);
            }
            fetchData();
        } catch (error) {

        }
    }, [])

    console.log(province);

    const saveProvince = async () => {
        try {
            console.log(province);
            toaster.push(<Message closable>"Thành công"</Message>, { placement: "topCenter", duration: 5000 })
        } catch (error) {

        }
    }

    const changeContent = v => {
        setProvince({ ...province, content: v })
    }

    return <div className="EditProvince">
        {province ? <>
            <div className="header-container">
                <h3> {province?.name}</h3>
                <Button appearance="primary" onClick={saveProvince}>Lưu</Button>
            </div>
            <TextEditor value={province?.content} onChange={changeContent} />
        </> : "Không tìm thấy"}

    </div>
}

export default EditProvince;