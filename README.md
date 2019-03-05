# Team - 2 

## Designing a better cinema experience

### Data flow
Layering of concerns is a key here!
We've distributed the entire structure into three layers
- DB & Microservice Layer for handling data
- Node layer for API Augumentation & Page serving
- Client Application for showcasing and event triggering

![Data Flow](https://github.com/XT-training/case-studies/blob/team-2/docs/data-flow.png)

### Database flow
![DB Flow](https://github.com/XT-training/case-studies/blob/team-2/docs/db-flow.jpg)

### Admin
Steps for adding and mapping theatres/movies/hall/dates/events
1. Add Movies and Theatres. [Here](https://github.com/XT-training/case-studies/blob/team-2/admin/movie-theatre.html)
2. Map and create Hall List for Theatres. [Here](https://github.com/XT-training/case-studies/blob/team-2/admin/hall.html) 
3. ADD Date for Movie (Select Movie -> Select Theatre -> Select Hall -> Add Dates). [Here](https://github.com/XT-training/case-studies/blob/team-2/admin/date.html)

### Microservice endpoint APIs
Get All Movies
- Get Movies - based on theatre
- Get All Theatres
- Get Theatres - based on movie
- Get All Events happening

- Update seats
