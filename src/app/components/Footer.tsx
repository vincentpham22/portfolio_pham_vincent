import { Box, IconButton } from "@mui/material"
import { FiArrowUp } from "react-icons/fi"
import Reveal from "./Reveal"

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: { xs: 8, md: 12 },
                mb: { xs: 5, md: 7 },
                px: { xs: 3, sm: 4, md: 6 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: 3, md: 4 },
                bgcolor: "transparent",
            }}
        >
            <Reveal direction="none" delay={0}>
                <Box
                    component="span"
                    aria-hidden
                    className="au-seam"
                    sx={{
                        display: "block",
                        width: "min(60vw, 420px)",
                        opacity: 0.9,
                    }}
                />
            </Reveal>

            <Reveal direction="up" delay={1}>
                <IconButton
                    href="#about"
                    aria-label="back to top"
                    className="glass--pill glow-pill"
                    sx={{
                        color: "inherit",
                        width: 48,
                        height: 48,
                    }}
                >
                    <FiArrowUp size={20} />
                </IconButton>
            </Reveal>
        </Box>
    )
}
