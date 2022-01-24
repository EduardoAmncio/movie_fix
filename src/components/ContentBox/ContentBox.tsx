import { Box, BoxProps } from "@mui/material";

interface ContentBoxProps extends BoxProps {}

export const ContentBox: React.FC<ContentBoxProps> = ({children, ...props}: ContentBoxProps) => {
    return (
        <Box
        sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            maxHeight: '2000px',
            flex: 1,
        }}
    >
        {children}
    </Box>
    );
}