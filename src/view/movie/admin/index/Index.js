import MovieController from "../../../../controller/MovieController.js";
import { loadAndRender } from '../../../../util/Render.js';
import Card from '../../../../components/Card.js';

// Create a movie controller
const movieController = new MovieController();

/**
 * Movie admin index.
 *  
 * @returns {undefined}
 */
export default function MovieAdminIndex() {
    // Load and render the movie index template
    loadAndRender('src/view/movie/admin/index/template.html', (html) => {
        // Get movie HTML element wrapper
        const movieWrapper = html.querySelector('#wrapper');

        // Find all movie
        movieController.findAll((movieResponses) => {
            // Loop through all movie responses
            let i = 0;
            movieResponses.forEach(movie => {

                // Create a new card
                const card = new Card({
                    type: "primary",
                    href: `#/admin/movies/${movie.title}/edit`,
                    header: movie.title,
                    image: `https://picsum.photos/200/2${i % 10}`,
                    body: `<p>${movie.description}</p>`,
                    footer: movie.genre.toString().split(',').map(genre => `<small class="badge secondary">${genre}</small>`).join(''),
                        animation: {
                        onmouseenter: {
                            type: "jello",
                            duration: 1000
                        },
                    }
                });

                movieWrapper.appendChild(card);
                i++;
            });
        }, (error) => {
            console.log(error);
        });
    });
}