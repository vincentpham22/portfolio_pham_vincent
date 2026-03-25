import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab"
import { Container, Typography, Box } from "@mui/material"
import { formations } from "@/data/formations"

export default function Formation() {
    return (
        <>
            <Container id="formations">
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 8 }}>
                    <Typography variant="h3">
                        Formations
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
                    {formations.map((formation, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        transition: 'border-color 0.3s ease'
                                    }
                                }}>
                                    <Typography variant="h6">{formation.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">{formation.location}</Typography>
                                    <Typography variant="caption" color="text.secondary">{formation.date}</Typography>
                                    <Typography variant="body1" sx={{ mt: 1 }}>{formation.description}</Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </>
    )
}