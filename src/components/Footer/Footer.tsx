import { Box, BoxProps } from "@mui/material";
import logo from '_assets/images/logo.svg';

interface FooterProps extends BoxProps {}

export const Footer: React.FC<FooterProps> = ({children, ...props}: FooterProps) => {
    return (
        <Box
        sx={{
            display: 'flex',
            bgcolor: '#99ffff',
            width: '100%',
            height: '100%',
            minHeight: '10rem',
            padding: '4'
        }}
    >
        {children}
    </Box>
    );
}