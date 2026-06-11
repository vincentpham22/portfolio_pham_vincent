import { Box, Typography, Container, IconButton, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Reveal from "./Reveal";
import GradientText from "./GradientText";


export default function Header() {
    return (
        <>
            <Box
                id="about"
                sx={{
                    minHeight: { xs: "auto", md: "100vh" },
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "transparent",
                    pt: { xs: 14, md: 8 },
                    pb: { xs: 8, md: 8 },
                }}
            >
                <Container maxWidth="lg" sx={{ bgcolor: "transparent" }}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={{ xs: 5, md: 6 }}
                        sx={{ mb: 0 }}
                    >
                        <Grid
                            size={{ xs: 12, md: 7 }}
                            sx={{ order: { xs: 2, md: 1 } }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: { xs: "center", md: "flex-start" },
                                    textAlign: { xs: "center", md: "left" },
                                }}
                            >
                                <Reveal direction="up" delay={0}>
                                    <GradientText
                                        variant="h2"
                                        component="h1"
                                        gutterBottom
                                        sx={{ m: 0 }}
                                    >
                                        Bienvenue dans mon portfolio
                                    </GradientText>
                                </Reveal>

                                {/* Glowing azure underline replaces the old white divider. */}
                                <Reveal direction="up" delay={0}>
                                    <Box
                                        className="au-title-rule"
                                        sx={{
                                            mt: 2,
                                            mb: 3,
                                            mx: { xs: "auto", md: 0 },
                                        }}
                                    />
                                </Reveal>

                                <Reveal direction="up" delay={1}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: "var(--au-text-dim)",
                                            maxWidth: 640,
                                            mx: { xs: "auto", md: 0 },
                                        }}
                                    >
                                        Je suis Vincent Pham, étudiant en informatique. J&apos;ai découvert le monde de l&apos;informatique et de la programmation il y&apos;a quelques années et depuis je suis passionné par ce domaine. J&apos;aime apprendre de nouvelles technologies, et mes expériences professionnelles, personnelles et académiques m&apos;ont consolidés dans mon choix de me spécialiser dans le développement web et l&apos;IA.
                                    </Typography>
                                </Reveal>

                                <Reveal direction="up" delay={2}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: { xs: "center", md: "flex-start" },
                                            gap: 2,
                                            mt: 4,
                                        }}
                                    >
                                        <Tooltip title="Télécharger mon CV">
                                            <IconButton
                                                href="/cv_pham_vincent_master_info.pdf"
                                                target="_blank"
                                                className="glass--pill glow-pill"
                                                sx={{ color: "inherit", width: 56, height: 56 }}
                                            >
                                                <PictureAsPdfIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Mon GitHub">
                                            <IconButton
                                                href="https://github.com/vincentpham22"
                                                target="_blank"
                                                className="glass--pill glow-pill"
                                                sx={{ color: "inherit", width: 56, height: 56 }}
                                            >
                                                <GitHubIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Mon LinkedIn">
                                            <IconButton
                                                href="https://www.linkedin.com/in/vincentpham22"
                                                target="_blank"
                                                className="glass--pill glow-pill"
                                                sx={{ color: "inherit", width: 56, height: 56 }}
                                            >
                                                <LinkedInIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Reveal>
                            </Box>
                        </Grid>
                        <Grid
                            size={{ xs: 12, md: 5 }}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                order: { xs: 1, md: 2 },
                            }}
                        >
                            <Reveal direction="scale" delay={2}>
                                <Box
                                    className="au-avatar-ring"
                                    sx={{
                                        width: "clamp(220px, 34vw, 360px)",
                                        aspectRatio: "1 / 1",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src="/pdp.jpg"
                                            alt="Photo de profil"
                                            fill
                                            sizes="(max-width: 900px) 60vw, 360px"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Reveal>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
