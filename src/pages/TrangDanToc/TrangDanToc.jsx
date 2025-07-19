import "./style.scss"

import PageEndIcon from '@rsuite/icons/PageEnd';
import dulieuDanToc from "./dulieuDanToc"
import { Button, Card, } from "rsuite";
import { NavLink } from "react-router-dom";

const TrangDanToc = () => {
  const newList = dulieuDanToc;

  return <div className="TrangDanToc">
    <div className="daklak-page-container">
      <div className="ward-container">
        <Card shaded>
          <Card.Header as="h2">
            <div className="title">Các dân tộc Việt Nam</div>
          </Card.Header>

          <Card.Body>
            <div className="ward-list">
              {newList.map(p => <Button appearance="link" key={p.name}><PageEndIcon /> <NavLink to={`/dan-toc/${p.id}`} className="ward-item" >{p.name}</NavLink></Button>)}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
}

export default TrangDanToc;