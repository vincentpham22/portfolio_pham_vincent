import { experiences } from "@/data/experiences"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab"
import { Container, Typography, Box, Stack, Chip } from "@mui/material"

export default function Experiences() {
    return (
        <>
            <Container id="exp" sx={{ fontSize: {xs: '10px'} }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 8 }}>
                    <Typography variant="h3">
                        Expériences Professionnelles
                    </Typography>
                    <Box sx={{
                        width: "150px",
                        height: "3px",
                        backgroundColor: "white",
                        borderRadius: "2px",
                        mt: 2,
                    }} />
                </Box>
                <Timeline position="alternate">
                    {experiences.map((experience, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
                                <Box sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    width: "100%",
                                    boxSizing: "border-box",
                                    wordBreak: "break-word",
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        transition: 'border-color 0.3s ease'
                                    }
                                }}>
                                    <Typography variant="h6">{experience.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{experience.location}</Typography>
                                    <Typography variant="caption" color="text.secondary">{experience.date}</Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>{experience.description}</Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>{experience.aventure}</Typography>
                                    <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
                                        {experience.tech.map((tech, idx) => (
                                            <Chip key={idx} label={tech} color='primary' variant='outlined' />
                                        ))
                                        }
                                    </Stack>
                                    <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap", gap: 1 }}>
                                        {experience.acquis.map((acquis, idx) => (
                                            <Chip key={idx} label={acquis} color='secondary' variant='outlined' />
                                        ))
                                        }
                                    </Stack>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </>
    )
}