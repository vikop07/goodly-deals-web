import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function VikoCard(){

    return (

        <Card
        sx={{
            transition: "0.2s",
            "&:hover": {
                transform: "scale(1.05)",
            }
        }}>
        
        <CardActionArea>

        <CardMedia 
        component="img" 
        src="https://via.placeholder.com/1000x200"
        height="200"
        alt="una descripcion"/>

        <CardContent>
            <Typography variant="h5">Card Title</Typography>
            <Typography 
            component="p"
            variant="h5">. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Why do we use it?
        
            </Typography>
        </CardContent>

        </CardActionArea>

        
        <CardActions>
            <Button variant="contained">Add</Button>
            <Button color="error">Remove</Button>
        </CardActions>
        </Card>
   
    )

}