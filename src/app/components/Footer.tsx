import { Box, Typography } from "@mui/material"

export default function Footer() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, my: 9 }}>
            <Box sx={{ width: {xs: "100px", sm: "200px", md:"400px"}, height: "1px", backgroundColor: "white", borderRadius: "2px" }} />
            <Typography variant="h4">
                FIN
            </Typography>
            <Box sx={{ width: {xs: "100px", sm: "200px", md:"400px"}, height: "1px", backgroundColor: "white", borderRadius: "2px" }} />
        </Box>
    )
}