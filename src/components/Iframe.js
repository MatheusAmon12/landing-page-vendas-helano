import { Container } from "@mui/material"

import useStyles from "@/pages/styles"

const Iframe = ({url, title}) => {
    const {classes} = useStyles()
    return(
        <Container className={`${classes.video_container} ${classes.margin_40}`}>
            <iframe
                src={`${url}`}
                allow="autoplay"
                className={classes.video}
                title={`${title}`}
                loading='lazy'
            />
        </Container>
    )
}

export default Iframe