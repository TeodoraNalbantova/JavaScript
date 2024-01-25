function solve(commands) {
    const movies = [];
    // Loop through each command in the input array

    for (const command of commands) {
        if (command.includes('addMovie')) {
    // If the command is 'addMovie', extract the movie name and push a new movie object to the array

            const movieName = command.replace('addMovie ', '');
            movies.push({
                name: movieName,
                director: '',
                date: '',
            });
        } else if (command.includes('directedBy')) {
     // If the command includes 'directedBy', extract movie name and director information
//  movieName is the extracted movie name from the beginning of the command string up to the occurrence of 'directedBy'.
// directedBy is the extracted director information starting from the position immediately after 'directedBy' up to the end of the command string.

            const movieName = command.substring(0, command.indexOf('directedBy')).trim();
            const directedBy = command.substring(command.indexOf('directedBy') + 'directedBy'.length).trim();
    
     // Find the movie object in the array and update the director property
            const result = movies.find(movie => movie.name === movieName);
            if (result) {
                result.director = directedBy;
            }
        } else if (command.includes('onDate')) {
      // If the command includes 'onDate', extract movie name and date information

            const movieName = command.substring(0, command.indexOf('onDate')).trim();
            const onDate = command.substring(command.indexOf('onDate') + 'onDate'.length).trim();
            // Find the movie object in the array and update the date property

            const result = movies.find(movie => movie.name === movieName);
            if (result) {
                result.date = onDate;
            }
        }
    }
   // Filter movies with complete information (name, director, and date)
   const validMovies = movies.filter(movie => movie.date && movie.director && movie.name);

   // Print each valid movie in JSON format
   validMovies.forEach(movie => console.log(JSON.stringify(movie)));
   //movie => console.log(JSON.stringify(movie)): This is an arrow function that takes each movie from the validMovies array, converts it to a JSON string using JSON.stringify(), and then logs the resulting string to the console.
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
