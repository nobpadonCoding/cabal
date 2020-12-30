import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Grid from '@material-ui/core/Grid';

function CharacterSelect() {
    const useStyle = makeStyles((theme) => ({
        image: {
            marginTop: 10,
            marginLeft: 10,
            width: 200,
            height: 'auto',
        },
    }));

    const [CharacterList] = React.useState([
        'pic1', 'pic2', 'pic3', 'pic4'
    ])

    const [TotalCharactors, setTotalCharactors] = React.useState(0)

    React.useEffect(() => {
        setTotalCharactors(CharacterList.length)
    }, [CharacterList])

    const classes = useStyle();
    return (
        <Paper elevation={3}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                totalSlides={TotalCharactors}
                infinite
            >
                <Slider>
                    {CharacterList.map((item, index) => (
                        <Slide key={item} index={index}>
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <img
                                    className={classes.image}
                                    alt=""
                                    src={`${process.env.PUBLIC_URL}/pic/${item}.png`}
                                />
                            </Grid>
                        </Slide>
                    )
                    )}
                </Slider>
            </CarouselProvider>
        </Paper>
    )
}

export default CharacterSelect
