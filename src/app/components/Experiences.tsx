"use client"
import { experiences } from "@/data/experiences"
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab"
import { Container, Typography, Stack, Chip, useTheme, useMediaQuery } from "@mui/material"
import SectionTitle from "./SectionTitle"
import { revealProps } from "./Reveal"
import GlassCard from "./GlassCard"

export default function Experiences() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

    return (
        <>
            <Container id="exp" sx={{ bgcolor: 'transparent', fontSize: { xs: '10px' } }}>
                <SectionTitle>Expériences Professionnelles</SectionTitle>
                <Timeline position={isMobile ? "right" : "alternate"} sx={{
                    px: { xs: 0, sm: 2 },
                    [`& .MuiTimelineItem-root::before`]: {
                        display: { xs: 'none', sm: 'block' }
                    }
                }}>
                    {experiences.map((experience, index) => {
                        // Converging streams: left side eases in from the left,
                        // right side from the right (mirrors the alternating layout).
                        const direction = index % 2 === 0 ? 'left' : 'right';
                        return (
                            <TimelineItem
                                key={index}
                                {...revealProps(index, direction)}
                            >
                                <TimelineSeparator>
                                    <TimelineDot
                                        className="au-dot"
                                        sx={{
                                            bgcolor: 'var(--au-azure)',
                                            borderColor: 'var(--au-hairline-lit)',
                                            boxShadow: 'var(--au-glow-az)',
                                        }}
                                    />
                                    {index < experiences.length - 1 && (
                                        <TimelineConnector
                                            className="au-connector"
                                            sx={{
                                                background: 'linear-gradient(180deg, var(--au-azure), var(--au-blue-dark))',
                                            }}
                                        />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ minWidth: 0, width: "100%", boxSizing: "border-box" }}>
                                    <GlassCard
                                        interactive
                                        sx={{
                                            p: { xs: 2, md: 3 },
                                            width: "100%",
                                            boxSizing: "border-box",
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ color: 'var(--au-text)' }}>{experience.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{experience.location}</Typography>
                                        <Typography variant="caption" sx={{ color: 'var(--au-text-faint)' }}>{experience.date}</Typography>
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
                                    </GlassCard>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </Container>
        </>
    )
}
