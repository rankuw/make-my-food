import { useEffect, useState } from "react"
import RestaurantCart, { promotionRestCard } from "./Resturant"
import {RESTAURANT_API} from "../constant"
import { Button, Flex } from '@chakra-ui/react'
import { filterRestaurant } from "../utils/helper"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import UserContext from "../utils/userContext"
import { useContext } from "react"

const Body = () => {
    const [searchText, setSearchText] = useState("Search")
    const [originalList, setOriginalList] = useState()
    const [filteredList, setFilterList] = useState()
    
    const PromotedRestarurant = promotionRestCard(RestaurantCart)

    const {userName, setUserName} = useContext(UserContext)
    console.log(userName, "OOOOOOOOOOO")

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
                <input placeholder="Restaurant name" value = {searchText} onChange={(e) => {setSearchText(e.target.value); setUserName(searchText)}}/>
                <Button 
                    colorScheme='teal' 
                    size='sm' 
                    onClick={ 
                        () =>{
                            const filteredList = filterRestaurant(searchText, originalList)
                            setFilterList(filteredList)
                            setUserName(searchText)
                        }   
                    }> Search </Button>
            </div>
            <div className="restaurant-list">
                {
                    <Flex gap="5" p="10" wrap="wrap">
                        {
                            filteredList.map((rest) => {
                            return <Link to={"/restaurant/" + rest.info.id} id={rest.info.id}>
                                {rest.promoted ? <PromotedRestarurant /> :  <RestaurantCart {...rest.info}/> }
                            </Link>
                            })
                        }
                    </Flex>
                    
                }
            </div>
            <div>
                {userName.name ? userName.name : userName}
            </div>
        </>
        
    )
}

export default Body