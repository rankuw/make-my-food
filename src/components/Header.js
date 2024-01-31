import { Flex, Box, HStack, Spacer, Text, Image } from "@chakra-ui/react";
import logo from "../logo.jpeg"
import { Link } from "react-router-dom";
const Header = () => {
    return (
        // <div className="header">
        //     <img src={logo} alt="Logo" className="logo"/>
        //     <div className="nav-items">
        //         <ul>
        //             <li> <Link to= "/">Home</Link> </li>
        //             <li> <Link to= "/about">About us</Link></li>
        //             <li>Cart</li>
        //         </ul>
        //     </div>
            
        // </div>

        <Flex p = "20px" alignItems="center">
            <Box>
                <Image src={logo} alt="Logo" />
            </Box>
            <Spacer />
            <HStack spacing={10}>
                <Text 
                fontSize={25} 
                _hover={{ background: "white", color: "teal.500",}}> 
                    <Link to = "/">Home</Link>
                </Text>
                <Text 
                fontSize={25} 
                _hover={{ background: "white", color: "teal.500",}}> 
                 <Link to= "/about">About Us</Link>
                </Text>
                <Text 
                fontSize={25} 
                _hover={{ background: "white", color: "teal.500",}}> 
                 <Link to= "/about">Cart</Link>
                </Text>
            </HStack>
        </Flex>

    )
}

export default Header;