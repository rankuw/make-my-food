import { useEffect, useState } from "react"
import RestaurantCart from "./Resturant"
import {restaurantData, RESTAURANT_API} from "../constant"
import { Button } from '@chakra-ui/react'
import { filterRestaurant } from "../utils/helper"
import Shimmer from "./Shimmer"

const Body = () => {
    const [searchText, setSearchText] = useState("Search")
    const [originalList, setOriginalList] = useState()
    const [filteredList, setFilterList] = useState()
    console.log("Render called")

    async function fetchRestaurants() {
        const data = await fetch(RESTAURANT_API)
        const json = await data.json()
        console.log("UDse Effect....")
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setOriginalList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilterList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    return !originalList ? <Shimmer/> :
     (
        <>
            <div className="search-bar">
                {console.log("Return jsxxx")}
                <input placeholder="Restaurant name" value = {searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                <Button 
                    colorScheme='teal' 
                    size='sm' 
                    onClick={ 
                        () =>{
                            const filteredList = filterRestaurant(searchText, originalList)
                            setFilterList(filteredList)
                        }   
                    }> Search </Button>
            </div>
            <div className="restaurant-list">
                {
                    filteredList.map((rest) => {
                        return <RestaurantCart {...rest.info}/>
                    })
                }
            </div>
        </>
        
    )
}

export default Body