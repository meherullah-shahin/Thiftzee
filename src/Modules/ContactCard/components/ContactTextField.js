import { TextField } from '@mui/material'
import React from 'react'

export default function ContactTextField(props) {
  return (
    <TextField sx={{
      p: '8px',
      my: 1
    }} fullWidth className='contactTextField' variant="outlined" label={props.label}></TextField>
  )
}
