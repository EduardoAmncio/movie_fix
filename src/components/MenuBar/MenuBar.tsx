import { Box, BoxProps } from "@mui/material";

interface MenuBarProps extends BoxProps {}

export const MenuBar: React.FC<MenuBarProps> = ({children, ...props}: MenuBarProps) => {
    return (
        <Box
            sx={{
               // display: 'flex',
              //  flexDirection: 'column',
                width: '100px',
               // maxWidth: '100px',
                height: '100px',
               // minHeight: '100vh',

                bgcolor: '#00ff33',
                //position: "absolute",
            //   zIndex:'100',
               }}
        >
            {children}
        </Box>
    );
}