import React, { useEffect, useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const ProvinceModule = () => {
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        // const res = await axios.get(`${API_URL}/provinces`);
        // setProvinces(res.data);
        setProvinces([
          { "id": 1, "name": "Hà Nội" },
          { "id": 2, "name": "TP. Hồ Chí Minh" }
        ]);
        console.log(1123);

      } catch (err) {
        console.error('Lỗi khi gọi API:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProvinces();
  }, []);

  return (
    <div className="province-rsuite">
      <h2>Danh sách tỉnh</h2>

      <Table
        data={provinces}
        loading={loading}
        autoHeight
        bordered
        cellBordered
        rowKey="id"
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>STT</HeaderCell>
          <Cell>{(_, rowIndex) => rowIndex + 1}</Cell>
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Tên tỉnh</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={160} align="center">
          <HeaderCell>Thao tác</HeaderCell>
          <Cell>
            {row => (
              <>
                <button
                  className="rs-btn edit"
                  onClick={() => navigate(`/admin/provinces/${row.id}/edit`)}
                >
                  Sửa
                </button>
                <button className="rs-btn delete">Xoá</button>
              </>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
};

export default ProvinceModule;
