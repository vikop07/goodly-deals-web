import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Product(){

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
    })

    return <Paper
    sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
    }}><Img src="https://via.placeholder.com/200"/>
        <Box sx={{flexGrow: 1, display: "grid", gap: 2}} >
            <Typography variant="h4">Product Name</Typography>
            <Typography variant="body1">Product Name</Typography>
            <Button variant="contained">Add Card</Button>
        </Box>
        <Box sx={{mr: 2}} component="p">
            $19.99
        </Box>
    
    
    </Paper>;
}