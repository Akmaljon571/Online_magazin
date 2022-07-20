import "./header.scss";
import { Logo } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "antd";
import React, { useRef } from "react";
import useStart from "../../hooks/useStart";
import language from "../../language";

function Header() {

  const {
    karzinka,
    setSearch,
    setTil,
    tanla,
    setRender,
    render,
    baza,
    til,
    dark
  } = useStart();
  const shef = useRef();
  // const shefs = useRef();
  const Navigate = useNavigate()

  const select_til = () => {
    setTil(shef.current.value);
  };

  const onSearch = (evt) => {
    Navigate('/')
    baza.map((key) => {
      if (key.title === render[0].title) {
        let data = key.obj.filter((item) => {
          if (
            item.name.toLowerCase().includes(evt.target.value.toLowerCase())
          ) {
            return item;
          }
          return false
        });
        if (data.length !== 0) {
          render.map((kalit) => {
            setRender([
              {
                name: kalit.name,
                title: kalit.title,
                img1: kalit.img1,
                obj: data,
              },
            ]);
            return false
          });
          setSearch(false)
        } else if (data.length === 0) {
          setSearch(true)
        }
      }
      return false
    });
  };






  // const darkWeb = () => {
  //   setDark(shefs.current.value);
  // }

  React.useEffect(() => {
    window.localStorage.setItem('dark', JSON.stringify(dark))
  }, [dark]);

  return (
    
    <header className="header">
      <div className="header">
        <div className="navbar">
          <Link to="/" className="header_logo_link">
            <Logo />
          </Link>
          <div onChange={onSearch} className="header_search">
            <input
              type="text"
              className="header_input"
              placeholder={language[til].search}
            />
            <span className="header_svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
          <div className="tell_Link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <a className="tell_nomer" href="tel:+998900456961">
              <span className="tell_admin">{language[til].admin}</span>
              +998900456961
            </a>
          </div>
          <select ref={shef} value={til} className="header_til" onChange={select_til}>
            <option value="uz">🇺🇿 Uz</option>
            <option value="ru">🇷🇺 Ru</option>
            <option value="en">🇱🇷 En</option>
          </select>
          
          <div className="navbar_svg">
            <Link to="/tanlanganlar">
              <Badge count={tanla.length}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </Badge>
            </Link>
            <Link to="/karzinka">
              <Badge count={karzinka.length}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Badge>
            </Link>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;

