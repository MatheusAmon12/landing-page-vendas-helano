import { Button } from "@mui/material"

const ButtonCTA = ({color, text, display, margin}) => {
    return(
        <Button
            variant='contained'
            size='large'
            color={`${color}`}
            style={{
                width: '340px', 
                color: 'white', 
                fontWeight: 'bold', 
                display: `${display}`, 
                margin: `${margin}`}}
        >
            {`${text}`}
        </Button>
    )
}

export default ButtonCTA