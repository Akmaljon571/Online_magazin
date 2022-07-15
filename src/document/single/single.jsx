import useStart from "../../hooks/useStart";
import karzinka from '../../img/karzinka_btn.png'
import "./single.scss";

function Single() {
  const { single } = useStart();

  return (
    <>
      <div className="single">
        <h1 className="single_h1">{single.name}</h1>
        <ul className="single_list">
          <li className="single_item">
            {single.sersa ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                type="ss"
                height="20"
                fill="currentColor"
                className="bi bi-heart-fill single_sersa sersa"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-heart single_sersa sersa"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
            <div className="single_header">
              <img
                src={single.img1}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img2}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img3}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img4}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img5}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
              <img
                src={single.img6}
                className="single_img"
                width={285}
                height={250}
                alt="single_img"
              />
            </div>
            <div className="single_footer">
              <h2 className="single_name">{single.name}</h2>
              <div className="single_narx">
                <span className="single_narx1">{single.narx} so'm</span>
                <div className="single_narx2"><span className="single_narxChiziq"></span>{single.eskiNarx}</div>
              </div>
            </div>
          </li>
        </ul>
        <div className="single_data">
          <div className="single_left">
             <div className="single_left--header">
             Описание и характеристики
             </div>
             <div className="single_left--main">
              <span>
                Активное шумоподавление: Нет
              </span>
              <span>
                Вес: 10 гр
              </span>
              <span>
                Влагозащита: Нет
              </span>
              <span>
                Длина кабеля: 1.2 м
              </span>
             </div>
          </div>
          <div className="single_btn">
            <button className="single_btn--btn ">Купить!</button>
             <button className="single_btn--svg">
              <img src={karzinka} className='single_btn--svg--img' alt="" />
              Добавить в корзину
             </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;
