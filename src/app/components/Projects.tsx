import { Container, Typography, Grid, Card, CardContent, Chip, Stack, Box, IconButton } from '@mui/material';
import { FaGithub } from "react-icons/fa";
import { projects } from '@/data/projects';
import Image from 'next/image';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';


export default function Projects() {
    return (
        <>
            <Container
                id="projects"
                maxWidth="lg"
                sx={{ bgcolor: 'transparent', pt: { xs: 10, md: 16 } }}
            >
                <SectionTitle>Projets</SectionTitle>
                <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index} sx={{ display: 'flex' }}>
                            <Reveal
                                delay={index % 6}
                                style={{ display: 'flex', width: '100%' }}
                            >
                                <Card
                                    className="glow-hover glow-hover--sheen"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {project.date}
                                        </Typography>
                                        <Typography sx={{ mt: 1 }}>
                                            {project.description}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>{project.aventure}
                                        </Typography>
                                        {project.images && project.images.length > 0 && (
                                            <Box sx={{ display: "flex", gap: 1.5, py: 2, overflowX: "auto", justifyContent: "center" }}>
                                                {project.images.map((img, i) => (
                                                    <Box
                                                        key={i}
                                                        sx={{
                                                            maxHeight: 200,
                                                            borderRadius: "12px",
                                                            overflow: "hidden",
                                                            flexShrink: 0,
                                                            border: '1px solid var(--au-hairline)',
                                                            boxShadow: 'var(--au-glass-shadow)',
                                                        }}
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={`${project.title} ${i + 1}`}
                                                            width={0}
                                                            height={0}
                                                            sizes="100vw"
                                                            style={{
                                                                display: "block",
                                                                width: "auto",
                                                                height: "200px",
                                                                borderRadius: "12px",
                                                            }}
                                                        />
                                                    </Box>
                                                ))}
                                            </Box>
                                        )}

                                        <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: "center", flexWrap: "wrap", gap: 0.5}}>
                                            {project.tech.map((tech, idx) => (
                                                <Chip key={idx} label={tech} color='primary' variant='outlined' />
                                            ))}
                                        </Stack>
                                        <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: "center", flexWrap: "wrap", gap: 0.5 }}>
                                            {project.acquis.map((acquis, idx) => (
                                                <Chip key={idx} label={acquis} color='secondary' variant='outlined' />
                                            ))
                                            }
                                        </Stack>
                                    </CardContent>
                                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                                        {project.github && (
                                            <IconButton
                                                className="glass--pill glow-pill"
                                                href={project.github}
                                                target="_blank"
                                                sx={{ color: 'inherit' }}
                                            >
                                                <FaGithub />
                                            </IconButton>
                                        )}
                                    </Box>


                                </Card>
                            </Reveal>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}
