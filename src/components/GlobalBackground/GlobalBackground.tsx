import { Box, BoxProps } from "@mui/material";

interface GlobalBackgroundProps extends BoxProps {}

export const GlobalBackground: React.FC<GlobalBackgroundProps> = ({children, ...props}: GlobalBackgroundProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '100vw',
                height: '100%',
                minHeight: '100vh',
                 backgroundSize: 'cover',
                 backgroundImage: 'linear-gradient(to right bottom, #051937, #0e193f, #1c1645, #2b1149, #3b064a)'
            }}
        >
            {children}
        </Box>
    );
}