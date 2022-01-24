import { Avatar, Box, BoxProps, Button, Divider, Input, Slide, Stack, Typography } from "@mui/material";
import ArrowIco from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { margin } from "@mui/system";

interface MenuProps extends BoxProps { }

// const Transition = React.forwardRef(function Transition(
//     props: TransitionProps & {
//       children: React.ReactElement<any, any>;
//     },
//     ref: React.Ref<unknown>,
//   ) {
//     return <Slide direction="up" ref={ref} {...props} />;
//   });

export const Menu: React.FC<MenuProps> = ({ children, ...props }: MenuProps) => {

    const [open, setOpen] = useState(false);

    const openMenu = () => setOpen(!open);

    return (
        <Box
            sx={{
                display: 'flex',
                //  flexDirection: 'column',
                //bgcolor: '#2172f6',
                justifyContent: 'space-between',
                width: (open ? '100%' : 'auto'),
                maxWidth: (open ? '250px' : '100px'),
                height: 'auto',
                maxHeight: '100%',
                transition: '0.3s',
               // boxShadow: '0.2rem 0 0.3rem 0rem rgba(10, 10, 10, 0.2)',
                zIndex: 100,

            }}
        >

            <Stack spacing={4} alignItems={'flex-start'} width={'100%'}>
                <Box
                    display={'flex'}
                    alignItems={'flex-start'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    width={'100%'}
                >
                    <Box
                        sx={{
                            bgcolor: '#002731',
                            width: open ? '100px' : '0px',
                            height: '100px',
                            transition: '0.3s',
                            // transform: open ? "rotate(50deg)" : "rotate(0deg)",
                        }}
                    >

                    </Box>
                    <Button variant="outlined" onClick={() => openMenu()} sx={{ transitionDelay: '2s', width: '10px', border: 'none' }}>
                        <ArrowIco
                            sx={{
                                width: '30px',
                                height: '30px',
                                color: '#fff',
                            }}
                        />
                    </Button>

                </Box>


                <Box //content
                    sx={{
                        //  display: 'flex',
                        //flex: 1,
                        // /bgcolor: '#7015c5',
                        width: open ? '100%' : '0px',

                        height: '500px',
                        borderRadius: '1rem',
                        transition: '0.3s',
                        padding: '0.5rem',
                        // transform: open ? "rotate(50deg)" : "rotate(0deg)",
                    }}
                >
                    <Box //item
                        sx={{
                            bgcolor: 'rgba(10, 10, 10, 0.3)',
                            width: open ? '100%' : '0px',

                            height: '40px',
                            borderRadius: '1rem',
                            transition: '0.3s',
                            // transform: open ? "rotate(50deg)" : "rotate(0deg)",
                        }}
                    >

                    </Box>
                    <Box //item
                        sx={{
                            bgcolor: 'rgba(10, 10, 10, 0.3)',
                            width: open ? '100%' : '0px',

                            height: '40px',
                            borderRadius: '1rem',
                            transition: '0.3s',
                            // transform: open ? "rotate(50deg)" : "rotate(0deg)",
                        }}
                    >

                    </Box>
                </Box>
            </Stack>
            <Divider orientation="vertical" flexItem sx={{
                width: '1px',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                marginY: '3rem',

            }} />
        </Box>

    );
}