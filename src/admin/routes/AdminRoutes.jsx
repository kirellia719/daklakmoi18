import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../pages/Layout';
import Dashboard from '../pages/Dashboard';
import VideoModule from '../pages/VideoModule';
import ImageModule from '../pages/ImageModule';
import ProvinceModule from '../pages/ProvinceModule';
import EditProvince from '../pages/ProvinceModule/EditProvince';


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="videos" element={<VideoModule />} />
        <Route path="images" element={<ImageModule />} />
        {/* <Route path="provinces/:id/edit" element={<EditProvince />} />
        <Route path="provinces" element={<ProvinceModule />} /> */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
