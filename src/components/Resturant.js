import { IMG_BASE_URL } from "../constant"

const RestaurantCart = (prop) => {
    const {name, locality, avgRating, cloudinaryImageId} = prop
    return (
        <div className="restaurant-card">
            <img src={IMG_BASE_URL + cloudinaryImageId} alt="Restaurant"/>
            <h2> {name} </h2>
            <h3>{ locality }</h3>
            <h4>{ avgRating }</h4>
        </div>
    )
}

export default RestaurantCart