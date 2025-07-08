import "./style.scss";

import { useEffect, useState } from "react";

import { Tabs } from "rsuite";
import VNProvince from "./province/VNProvince";
import DakLakWard from "./DakLakWard";
import { Route, Routes } from "react-router-dom";
import EditProvince from "./province/EditProvince";

const AllTabs = () => {
    return <Tabs defaultActiveKey="1" className="admin-container">
        <Tabs.Tab eventKey="1" title="Các tỉnh thành">
            <VNProvince />
        </Tabs.Tab>
        <Tabs.Tab eventKey="2" title="Các phường/xã ở Đăk Lăk">
            <DakLakWard />
        </Tabs.Tab>
    </Tabs>
}

const AdminLayout = () => {
    return <div className="AdminLayout">
        <Routes>
            <Route path="/:id/edit" element={<EditProvince />} />
            <Route path="/" index element={<AllTabs />} />
        </Routes>
    </div>;
};

export default AdminLayout;