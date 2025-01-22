---
title: 'Grid City: A Hackathon Journey into the Energy Transition by Vandebron'
description: A journey into the energy transition through the lens of a video game
createdAt: 2025-01-21
coverImage: images/game-start-screen.png
tags: [godot, energy transition, gaming]
author: Dick Visser & Tomás Phelan
---

# Grid City: A Hackathon Journey into the Energy Transition by Vandebron

During the last couple of hackathons, we set out to gamify one of the most pressing challenges of our time, the transition to green energy.
A problem our team, VPP [Virtual Power Plant], deals with on a daily basis.
What emerged was an interactive game designed to educate players about the complexities of energy grid management in a fun and manageable way, 
though debatable if it is fun or well-balanced. It was a hackathon project after all.

<video playsinline autoplay muted loop controls style="max-width: 100%; height: auto;">
  <source src="../images/game-start-h264_v2.mp4" type="video/mp4;">
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

### Final Thoughts

While we did meet most of these goals, we definitely see room for improvement. 
For instance, the city building aspect of the game does not exactly match what we want to teach the player. A Virtual Power Plant mainly balances the grid through smart curtailment. 
It doesn't involve building new renewables. So we considered removing the building mechanic from the game, but we were already to deep into development.

To work around this design issue, we toyed with the idea of having a coal plant in the game, amongst others. 
The goal was to shut down the coal plant before it fully pollutes the planet. 
After shutdown, players face the challenge of balancing the grid reliably using just renewable energy. 
Unfortunately, we ran out of time before we could fine-tune this part of the game.

<video autoplay muted loop playsinline controls style="max-width: 100%; height: auto;">
  <source src="../images/coal-plant-prototype.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

*Here's an early prototype of the coal plant that didn't make it in to the game.*

At some point, though, you have to wrap up the hackathon. So we polished what we had and declared the game "done". 
Whether you’re a gamer, an energy enthusiast, or someone entirely new to the topic, we hope this game sparks your interest in the energy transition :)

You can play the game right from your browser [here](https://djvisser.itch.io/grid-city)!
If you want to take a look at the (hackathon-quality) code, check out our [public repo](https://github.com/Vandebron/vandebron_game).

