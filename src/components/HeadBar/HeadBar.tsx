import { Box, BoxProps } from "@mui/material";
import logo from '_assets/images/logo.svg';

interface HeadBarProps extends BoxProps { }

export const HeadBar: React.FC<HeadBarProps> = ({ children, ...props }: HeadBarProps) => {
    return (
        <Box
            
            sx={{
                display: 'flex',
                flexDirection: 'column',
                //   bgcolor: 'rgba(255, 255, 255, .1)',
                justifyContent: 'space-between',
                alignItems: 'center',

                width: '100%',
                height: '100%',
                padding: '1rem',
                boxShadow: '0 0 1rem 0 rgba(0, 0, 0, .5)',
                borderRadius: '1rem',
                marginX: 'auto',
            }}
        >
            {/* style={teste} */}
            <img src={logo} style={{
                width: '10rem',
            }} alt="logo" />

        </Box>
    );
}