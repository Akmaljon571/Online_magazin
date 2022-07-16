import useStart from "../../hooks/useStart";
import { Link, useNavigate } from "react-router-dom";
import udalit from "../../img/udalit.png";
import Language from "../../language";
import "./karzinka.scss";
import kar from "../../img/Иллюстрация.png";
import { Image } from "antd";
import React, { useState } from "react";
import language from "../../language";

function Karzinka() {
  const { karzinka, setKarzinka, til } = useStart();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const navi = () => {
    navigate("/tolov");
  };

  const udalite = (evt) => {
    setKarzinka(
      karzinka.filter((key) => {
        if (key.id !== Number(evt.target.id)) {
          return key;
        }
        return false
      })
    );
  };

  return (
    <>
      {karzinka.length === 0 ? (
        <div className="bosh">
          <img src={kar} alt="" />
          <h2 className="bosh_h2">{language[til].bosh}</h2>
          <p className="bosh_p">{language[til].lekin}</p>
          <Link to={"/"} className="bosh_btn">
            {language[til].mahsulot}
          </Link>
        </div>
      ) : (
        <div className="sotuv">
          <h2 className="sotuv_h2">{language[til].karzinka}</h2>

          {karzinka.map((key) => (
            <div key={key.id} className="sotuv_ota">
              <div className="sotuv_left">
                <div className="sotuv_header">
                  <Image
                    style={{ borderRadius: 5 }}
                    preview={{
                      visible: false,
                    }}
                    width={200}
                    heigh={200}
                    src={key.img1}
                    onClick={() => setVisible(true)}
                  />
                  <div
                    style={{
                      display: "none",
                    }}
                  >
                    <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                    >
                      <Image src={key.img1} />
                      <Image src={key.img2} />
                      <Image src={key.img3} />
                      <Image src={key.img4} />
                      <Image src={key.img5} />
                    </Image.PreviewGroup>
                  </div>
                  <div className="sotuv_header--div"></div>
                </div>
                <div className="sotuv_main">
                  <h2 className="sotuv_main--h2">{key.name}</h2>
                  <p className="sotuv_main--p">{key.narx} {Language[til].som}</p>
                </div>
                <div className="sotuv_footer">
                  <img
                    src={udalit}
                    onClick={udalite}
                    id={key.id}
                    className="sotuv_footer--udalit"
                    alt=""
                  />
                  <p className="sotuv_footer--narx">{key.narx} {Language[til].som}</p>
                </div>
              </div>
              <div className="sanoq_rigth">
                <div className="sanoq_rigth--header">
                  <div className="sanoq_rigth--top">
                    <h2 className="sanoq_rigth--h2">{language[til].jami}</h2>
                    <p className="sanoq_rigth--p">{key.narx} {Language[til].som}</p>
                  </div>
                  <button onClick={navi} className="sanoq_bottom--btn">
                    {language[til].otish}
                  </button>
                </div>
                <div className="sanoq_rigth--footer">
                  <div className="sanoq_rigth--top">
                    <h2 className="sanoq_rigth--h2">{language[til].admin}</h2>
                    <p className="sanoq_rigth--p">+998900456961</p>
                  </div>
                  <a
                    href={ "tel:+998900456961" }
                    className="sanoq_bottom--link "
                  >
                    +998900456961
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Karzinka;
