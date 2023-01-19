import { useEffect, useState } from 'react'

import { Box, Stack, Typography } from '@mui/material'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import RowBar from './RowBar';


function List() {

    const [selectedBreed, setSelectedBreed] = useState('beng')
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetchFromAPI(`breed_ids=${selectedBreed}`).then(res => {
            console.log(res)
            setCats(res)
        })
            .catch(err => {
                console.log(err)
            })
    }, [selectedBreed])


    return (

        <Stack direction="row" flexWrap="wrap"
            justifyContent="center" gap={2}>



            {cats.map(cat => (
                <Box sx={{
                    '&:hover': {
                        cursor: 'pointer',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }} mt={4} key={cat.id}>
                    <img style={{ width: '290px', height: '290px' }} src={cat.url}></img>

                </Box>

            ))}

            <RowBar
                selectedBreed={selectedBreed}
                setSelectedBreed={setSelectedBreed}
            ></RowBar>
        </Stack>

    )
}

export default List