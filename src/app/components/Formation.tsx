"use client"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab"
import { Container, Typography, useTheme, useMediaQuery } from "@mui/material"
import { formations } from "@/data/formations"
import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { revealProps } from "./Reveal"

export default function Formation() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

    return (
        <>
            <Container id="formations" sx={{ bgcolor: 'transparent', pt: { xs: 10, md: 16 } }}>
                <SectionTitle>Formations</SectionTitle>
                <Timeline position={isMobile ? "right" : "alternate"} sx={{
                    px: { xs: 0, sm: 2 },
                    [`& .MuiTimelineItem-root::before`]: {
                        display: { xs: 'none', sm: 'block' }
                    }
                }}>
                    {formations.map((formation, index) => {
                        // On mobile (position="right") streams converge from the right;
                        // on desktop (position="alternate") alternate the entrance per side.
                        const direction = isMobile
                            ? 'right'
                            : index % 2 === 0
                                ? 'left'
                                : 'right';
                        return (
                            <TimelineItem key={index} {...revealProps(index, direction)}>
                                <TimelineSeparator>
                                    <TimelineDot
                                        className="au-dot"
                                        sx={{
                                            bgcolor: 'var(--au-azure)',
                                            borderColor: 'var(--au-hairline-lit)',
                                            boxShadow: 'var(--au-glow-az)',
                                        }}
                                    />
                                    {index < formations.length - 1 && (
                                        <TimelineConnector
                                            className="au-connector"
                                            sx={{
                                                background: 'linear-gradient(180deg, var(--au-azure), var(--au-blue-dark))',
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <GlassCard
                                        interactive
                                        sx={{
                                            p: { xs: 2, md: 3 },
                                            maxWidth: 440,
                                            display: 'inline-block',
                                            textAlign: 'left',
                                            verticalAlign: 'top',
                                        }}
                                    >
                                        <Typography variant="h6">{formation.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{formation.location}</Typography>
                                        <Typography variant="caption" color="text.secondary">{formation.date}</Typography>
                                        <Typography variant="body1" sx={{ mt: 1 }}>{formation.description}</Typography>
                                    </GlassCard>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </Container>
        </>
    )
}
