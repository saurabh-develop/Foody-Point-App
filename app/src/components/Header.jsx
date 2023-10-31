import React, { useState } from "react";
import styled from "styled-components";

import style from "./Header.module.css";

const Header = (props) => {
  const { searchFood, setFilteredData, data } = props;
  const [active, setActive] = useState("1");

  const handleClick = (event, category) => {
    setActive(event.target.id);
    filterFood(category);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);

      return;
    } else {
      const filter = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilteredData(filter);
    }
  };
  return (
    <>
      <Container>
        <div className="heading">
          <h1>
            F<span style={{ color: "#fe8618" }}>oo</span>dy P
            <span style={{ color: "#fe8618" }}>o</span>int
          </h1>
          <form>
            <input onChange={searchFood} type="text" placeholder="Search..." />
          </form>
        </div>
        <div className="btn">
          <Button
            active={active}
            id={"1"}
            className={active === "1" ? style.active : style.undefined}
            onClick={(event) => handleClick(event, "all")}
          >
            All
          </Button>
          <Button
            active={active}
            id={"2"}
            className={active === "2" ? style.active : style.undefined}
            onClick={(event) => handleClick(event, "Breakfast")}
          >
            Breakfast
          </Button>
          <Button
            active={active}
            id={"3"}
            className={active === "3" ? style.active : style.undefined}
            onClick={(event) => handleClick(event, "Lunch")}
          >
            Lunch
          </Button>
          <Button
            active={active}
            id={"4"}
            className={active === "4" ? style.active : style.undefined}
            onClick={(event) => handleClick(event, "dinner")}
          >
            Dinner
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 32%;

  font-family: "Poppins";

  h1 {
    width: 185px;
    height: 39px;
    font-size: 32px;
    float: left;
  }
  .heading {
    padding-top: 60px;
    padding-left: 120px;
    padding-right: 120px;
    display: flex;
    justify-content: space-between;
  }
  @media (0<width<750px) {
    .heading {
      flex-direction: column;
      justify-content: space-around;
      height: 120px;
    }
    h1 {
      text-align: center;
    }
  }
  input {
    width: 285px;
    height: 40px;
    padding-left: 20px;
    border: none;
    border-radius: 20px;
    background-color: #303133;
    color: #ffffff;
  }
  .btn {
    width: 400px;
    height: 31px;
    margin: auto;
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
  }
`;
const Button = styled.button`
  padding: 6px 12px 6px 12px;
  margin-left: 10px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
