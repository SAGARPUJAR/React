import {CDN_URL} from '../Utils/constants'

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;

  return (
    <div className="restoCard">
      <img
        src={CDN_URL+cloudinaryImageId}
        className="resImg"
      />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} Minutes</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
    </div>
  );
};

export default ResturantCard;
