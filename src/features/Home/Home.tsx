import { Box, Divider } from "@mui/material";
import { Content } from "components/Content";
import { ContentBox } from "components/ContentBox";
import { Footer } from "components/Footer";
import { GlobalBackground } from "components/GlobalBackground";
import { HeadBar } from "components/HeadBar";
import { Menu } from "components/Menu";
import { MenuBar } from "components/MenuBar";
import PinInput from "react-pin-input";
// import { CSSProperties } from "react";

// const teste: CSSProperties = {
//     width: '300px',

// }
export const Home: React.FC = () => {

    

    return (
        <GlobalBackground>
            <HeadBar></HeadBar>
            <ContentBox>
                <Menu>menu</Menu>
                <Content>
                    content
                    <Box width={'100%'} maxWidth={'100%'} height={200} bgcolor={'#69e06f'}></Box>
                    <Box width={200} height={200} bgcolor={'#ff9922'}></Box>
                    {/* <Box width={200} height={200} bgcolor={'#69e06f'}></Box>
                    <Box width={200} height={200} bgcolor={'#ff9922'}></Box>
                    <Box width={200} height={200} bgcolor={'#69e06f'}></Box>
                    <Box width={200} height={200} bgcolor={'#ff9922'}></Box>
                    <Box width={200} height={200} bgcolor={'#ff9922'}></Box>
                    <Box width={200} height={200} bgcolor={'#69e06f'}></Box>
                    <Box width={200} height={200} bgcolor={'#ff9922'}></Box>
                    <Box width={200} height={200} bgcolor={'#69e06f'}></Box> */}

                </Content>
               
        
            </ContentBox>
            <Footer>footer</Footer>
        </GlobalBackground>
    );
}