import { useParams } from "react-router-dom"

const RestaurantStore = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Restaurant Details {params.id}</h1>
        </div>
    )
}

export default RestaurantStore