import { Box, Typography, Container, IconButton, Tooltip} from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


export default function Header() {
    return (
        <>
            <Box id="about" sx={{ minHeight: { xs: "150vh", md: "100vh" }, display: "flex", alignItems: "center", mt: 8 }}>
                <Container>
                    <Grid container justifyContent="center" alignItems="center" spacing={4} sx={{ mb: 4 }}>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
                                Bienvenue dans mon portfolio
                            </Typography>
                            <Box sx={{
                                width: "200px",
                                height: "3px",
                                backgroundColor: "white",
                                margin: "8px auto 24px auto",
                            }} />
                            <Typography variant="h6" color="textSecondary" sx={{ textAlign: "center" }}>
                                Je suis Vincent Pham, étudiant en informatique. J&apos;ai découvert le monde de l&apos;informatique et de la programmation il y&apos;a quelques années et depuis je suis passionné par ce domaine. J&apos;aime apprendre de nouvelles technologies, et mes expériences professionnelles, personnelles et académiques m&apos;ont consolidés dans mon choix de me spécialiser dans le développement web et l&apos;IA.
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
                                <Tooltip title="Télécharger mon CV">
                                    <IconButton
                                        href="/cv_pham_vincent_master_info.pdf"
                                        target="_blank"
                                        sx={{ color: "primary.main" }}
                                    >
                                        <PictureAsPdfIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Mon GitHub">
                                    <IconButton
                                        href="https://github.com/vincentpham22"
                                        target="_blank"
                                        sx={{ color: "primary.main" }}
                                    >
                                        <GitHubIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Mon LinkedIn">
                                    <IconButton
                                        href="https://www.linkedin.com/in/vincentpham22"
                                        target="_blank"
                                        sx={{ color: "primary.main" }}
                                    >
                                        <LinkedInIcon sx={{ fontSize: 40 }} />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ width: 400, height: 400, position: "relative", borderRadius: "50%", overflow: "hidden" }}>
                                <Image
                                    src="/pdp.jpg"
                                    alt="Photo de profil"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}