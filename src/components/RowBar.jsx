import { Stack } from "@mui/system"
import { breeds } from "../utils/constants"

const RowBar = ({selectedBreed, setSelectedBreed}) => {
  return (
    <div className="app__rowbarButtons">
    <Stack
    direction="column"
    gap= {3}
    sx={{
        overflowX: "auto",
       
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'row' }, 
    }}>
        {breeds.map((breed)=>(
            <button className="custom__button"
            onClick={() => setSelectedBreed(breed.id)}
            key={breed.id}
            >
                <span>{breed.name}</span>
            </button>
        ))}
    </Stack>
    </div>
  )
}

export default RowBar