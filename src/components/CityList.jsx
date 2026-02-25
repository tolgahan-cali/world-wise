import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import PropTypes from "prop-types";
import Message from "../components/Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <CityItem city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;

CityList.propTypes = {
  cities: PropTypes.array, // cities bir array olmalı ve mutlaka gelmeli
  isLoading: PropTypes.bool, // isLoading bir boolean olmalı
};
