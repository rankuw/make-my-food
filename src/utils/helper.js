export const filterRestaurant = (searchText, restaurants) => {
    const filteredList = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filteredList
}