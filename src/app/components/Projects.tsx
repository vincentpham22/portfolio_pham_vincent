import { Container, Typography, Grid, Card, CardContent, Chip, Stack, Box, IconButton } from '@mui/material';
import { FaGithub } from "react-icons/fa";
import { projects } from '@/data/projects';
import Image from 'next/image';


export default function Projects() {
    return (
        <>
            <Container id="projects">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 8 }}>
                    <Typography variant="h3">
                        Projets
                    </Typography>
                    <Box sx={{
                        width: "150px",
                        height: "3px",
                        backgroundColor: "white",
                        borderRadius: "2px",
                        mt: 2,
                    }} />
                </Box>
                <Grid container spacing={4} alignItems="flex-start">
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card sx={{
                                display: 'flex', flexDirection: 'column', borderTop: '3px solid', borderColor: 'primary.main',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                    boxShadow: '0 12px 30px rgba(108, 99, 255, 0.2)',
                                }
                            }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {project.date}
                                    </Typography>
                                    <Typography>
                                        {project.description}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>{project.aventure}
                                    </Typography>
                                    {project.images && project.images.length > 0 && (
                                        <Box sx={{ display: "flex", gap: 1, p: 1, overflowX: "auto", justifyContent: "center" }}>
                                            {project.images.map((img, i) => (
                                                <Box
                                                    key={i}
                                                    sx={{
                                                        maxHeight: 200,
                                                        borderRadius: "8px",
                                                        overflow: "hidden",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${project.title} ${i + 1}`}
                                                        width={0}
                                                        height={0}
                                                        sizes="100vw"
                                                        style={{
                                                            width: "auto",
                                                            height: "200px",
                                                            borderRadius: "8px",
                                                        }}
                                                    />
                                                </Box>
                                            ))}
                                        </Box>
                                    )}

                                    <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: "center" }}>
                                        {project.tech.map((tech, idx) => (
                                            <Chip key={idx} label={tech} color='primary' variant='outlined' />
                                        ))}
                                    </Stack>
                                    <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: "center" }}>
                                        {project.acquis.map((acquis, idx) => (
                                            <Chip key={idx} label={acquis} color='secondary' variant='outlined' />
                                        ))
                                        }
                                    </Stack>
                                </CardContent>
                                <Box sx={{ textAlign: 'center', mb: 2 }}>
                                    {project.github && (
                                        <IconButton
                                            href={project.github}
                                            target="_blank"
                                            sx={{
                                                border: '1px solid',
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                '&:hover': {
                                                    bgcolor: 'primary.main',
                                                    color: 'white',
                                                }
                                            }}
                                        >
                                            <FaGithub />
                                        </IconButton>
                                    )}
                                </Box>


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}