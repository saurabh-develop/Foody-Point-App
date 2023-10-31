import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Cards from "./components/Cards";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const parsedResponse = await response.json();
        setData(parsedResponse);
        setFilteredData(parsedResponse);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    } else {
      const filter = data?.filter((food) =>
        food.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filter);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>loading....</div>;
  }
  return (
    <>
      <MainContainer>
        <Header
          searchFood={searchFood}
          setFilteredData={setFilteredData}
          data={data}
        />
        <div className="cards">
          {filteredData?.map((food) => {
            return (
              <Cards
                key={food.name}
                type={data.type}
                image={food.image}
                name={food.name}
                text={food.text}
                price={food.price.toFixed(2)}
              />
            );
          })}
        </div>
      </MainContainer>
    </>
  );
};

export default App;

const MainContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  color: #ffffff;
  background-color: #1e1f21;
  min-height: 100vh;
  .cards {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 32px;
    grid-gap: 1em;
    margin: auto;
    margin-top: 20px;
    padding-bottom: 20px;
  }
`;
