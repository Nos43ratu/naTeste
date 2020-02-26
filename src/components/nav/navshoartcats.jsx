import React from "react";

const Shoartcut = props => (
  <div className={`Shoartcut ${props.navtype ? "navanimation" : null}`}>
    <a href="eke">Конструктор тортов</a>
    <a href="eke">Главная старница</a>
    <a href="eke">Популярные торты</a>
    <a href="eke">Лучшие поворав</a>
  </div>
);
export default Shoartcut;
