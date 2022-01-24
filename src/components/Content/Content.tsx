import { Box, BoxProps } from "@mui/material";

interface ContentProps extends BoxProps {}

export const Content: React.FC<ContentProps> = ({children, ...props}: ContentProps) => {
    return (
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
           // bgcolor: '#f59e57',
            width: '100%',
            maxWidth: '100%',
            height:'auto', 
            maxHeight: '100%',
            flex: 1,
            overflow: 'hidden',
           // padding: '4rem',
        }}
    >
        {children}
    </Box>
    );
}