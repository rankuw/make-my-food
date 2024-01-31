import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react"
import { IMG_BASE_URL } from "../constant"

const RestaurantCart = (prop) => {
    const {name, locality, avgRating, cloudinaryImageId} = prop
    return (
        // <div className="restaurant-card">
        //     <img src={IMG_BASE_URL + cloudinaryImageId} alt="Restaurant"/>
        //     <h2> {name} </h2>
        //     <h3>{ locality }</h3>
        //     <h4>{ avgRating }</h4>
        // </div>

        <Card width="200px" height="300px">
            <CardBody size="lg" bg="teal.50">
                <Image
                    src={IMG_BASE_URL + cloudinaryImageId}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' color="teal">{name}</Heading>
                    <Text color='blue.600' fontSize='xl'>
                        {locality}
                    </Text>
                    <Text color='blue.600' fontSize='xl'>
                        {avgRating}
                    </Text>
                </Stack>
            </CardBody>
        </Card>


    )
}

export const promotionRestCard = () => {
    return () => {
        return (
            <div>
                <span>Promoted</span>
                <RestaurantCart />
            </div>
        )
    }
}

export default RestaurantCart