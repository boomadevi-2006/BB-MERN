import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GenreCarousel.css';

import fictionImg from '../assets/fiction.jpg';
import romanceImg from '../assets/romance.jpg';
import thrillerImg from '../assets/thriller.jpg';
import horrorImg from '../assets/horror.jpg';
import scienceImg from '../assets/science.jpg';
import mysteryImg from '../assets/mystery.jpg';
import fantasyImg from '../assets/fantasy.jpg';
import biographyImg from '../assets/biography.jpg';
import historyImg from '../assets/history.jpg';
import comicsImg from '../assets/comics.jpg';
import adventureImg from '../assets/adventure.jpg';
import childrenImg from '../assets/children.jpg';
import poetryImg from '../assets/poetry.jpg';
import dramaImg from '../assets/drama.jpg';
import selfHelpImg from '../assets/selfhelp.jpg';
import spiritualImg from '../assets/spiritual.jpg';
import cookbooksImg from '../assets/cookbooks.jpg';
import sciFiImg from '../assets/scifi.jpg';


const genres = [
  { name: 'Fiction', image: fictionImg, path: '/shop/fiction' },
  { name: 'Romance', image: romanceImg, path: '/shop/romance' },
  { name: 'Thriller', image: thrillerImg, path: '/shop/thriller' },
  { name: 'Horror', image: horrorImg, path: '/shop/horror' },
  { name: 'Science', image: scienceImg, path: '/shop/science' },
  { name: 'Mystery', image: mysteryImg, path: '/shop/mystery' },
  { name: 'Fantasy', image: fantasyImg, path: '/shop/fantasy' },
  { name: 'Biography', image: biographyImg, path: '/shop/biography' },
  { name: 'History', image: historyImg, path: '/shop/history' },
  { name: 'Comics', image: comicsImg, path: '/shop/comics' },
  { name: 'Adventure', image: adventureImg, path: '/shop/adventure' },
  { name: 'Children', image: childrenImg, path: '/shop/children' },
  { name: 'Poetry', image: poetryImg, path: '/shop/poetry' },
  { name: 'Drama', image: dramaImg, path: '/shop/drama' },
  { name: 'Self Help', image: selfHelpImg, path: '/shop/self-help' },
  { name: 'Spiritual', image: spiritualImg, path: '/shop/spiritual' },
  { name: 'Cookbooks', image: cookbooksImg, path: '/shop/cookbooks' },
  { name: 'Science Fiction', image: sciFiImg, path: '/shop/science-fiction' },
];

const GenreCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelector('.genre-card');
const scrollAmount = carouselRef.current.querySelector('.genre-card')?.offsetWidth || 300;
carouselRef.current.scrollLeft += scrollAmount;

        if (carouselRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += scrollAmount;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="genre-carousel-container">
      <div className="genre-carousel" ref={carouselRef}>
        {genres.map((genre, index) => (
          <Link to={genre.path} key={index} className="genre-card">
            <img src={genre.image} alt={genre.name} />
            <p>{genre.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreCarousel;
