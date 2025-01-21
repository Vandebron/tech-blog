---
title: 'Vandebron The Video Game: A Hackathon Journey into the Energy Transition'
description: A journey into the energy transition through the lens of a video game
createdAt: 2025-01-21
coverImage: images/game-start-screen.png
tags: [godot, energy transition, gaming]
author: Dick Visser & Tomás Phelan
---

# Vandebron The Video Game: A Hackathon Journey into the Energy Transition

During the last couple of hackathons, we set out to gamify one of the most pressing challenges of our time, the transition to green energy.
A problem our team, VPP [Virtual Power Plant], deals with on a daily basis.
What emerged was an interactive game designed to educate players about the complexities of energy grid management in a fun and manageable way, 
though debatable if it is fun or well-balanced. It was a hackathon project after all.

<video autoplay muted loop controls width="640" height="360">
  <source src="../images/game-start.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Let’s dive into the vision, mechanics, and what we hope players take away from this experience.

### Vision: Educate Through Play
Our goal was to create more than just a game. We envisioned a tool that serves as an onboarding experience, 
not just for our colleagues, but also anyone interested in the energy transition.

To realize this vision we chose to go with Godot as our game engine of choice. 
An open-source game engine that is a super fun and fantastic tool that allowed us to quickly prototype and iterate on our ideas and feedback.

### The Core Gameplay Loop: Keeping the Grid Balanced
In this game, your primary goal is to keep the energy grid frequency within the "goldilocks zone", i.e. not too much power production, not too little. 
The longer you can maintain this balance, the better!

#### Key Concepts:
- **Keeping within the goldilocks zone:** energy production must match energy demand. Fall outside the goldilocks zone, and the grid becomes unstable. If it is unstable for too long, then it's game over.
- **Keeping up with demand:** Houses are automatically built over time, mimicking real-life construction. It’s up to the player to meet this increasing demand by manually adding renewable energy assets, like wind turbines, solar panels, and batteries.
- **Forecasting:** Players can use weather forecasts to anticipate and plan for energy production challenges. Too much wind? Better disable some wind turbines for the time being.
- **Curtailment:** Too much energy? Players must decide when to turn off assets to avoid overproduction. This introduces the concept of curtailment and highlights the work often required in grid management, due to not being able to store the excess energy.
- **The Main Goal:** A 100% Green Energy Grid, 100% of the time.

What does success look like in the game? Maintaining the grid with 100% green power for as long as possible, via strategically managing energy production and curtailment to ensure sustainability.
Players experience the dual challenge of meeting growing energy demands and avoiding excess production, a dilemma central to real-world energy grids.

Whether you’re a gamer, an energy enthusiast, or someone entirely new to the topic, we hope this game sparks your interest in the energy transition :) 