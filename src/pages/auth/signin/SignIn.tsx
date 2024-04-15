
import Login from '@/components/Login';
import Box from '@mui/material/Box'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function SignIn() {
    const{data: session}  = useSession();
  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <h2>{session ? "It's been a long time coming back!" : "Please log in"} </h2>
        <Login />
    </Box>
  )
}
