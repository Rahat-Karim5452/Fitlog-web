# FitLog

FitLog is a modern workout library and workout planning
application built with Next.js, TypeScript and Tailwind CSS.

## Features

- Browse workout library
- View detailed workout information
- Add workouts to today's plan
- Save workouts for later
- Track completed workouts
- Sort workouts by duration, calories and rating
- Responsive design for mobile, tablet and desktop
- Toast notifications
- Custom 404 page
- Loading states

## Technologies

- Next.js
- TypeScript
- Tailwind CSS
- React Context API
- React Icons
- React Toastify
- REST API

## API

Workout API:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Routes

- `/` - Workout Library
- `/workout/[id]` - Workout Details
- `/my-plan` - My Plan

## Project Structure

The project uses the Next.js App Router
with Server Components and Client Components
only where interaction is required.

## Deployment

The project is deployed using Vercel.
