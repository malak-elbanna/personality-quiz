import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PersonalityType = () => {
  const personalityTraits = [
    {
      id: "1",
      trait: "Extraversion",
      description: "Extraversion is characterized by outgoing, energetic behavior. People high in extraversion are often enthusiastic, talkative, and assertive.",
      image: "https://media.istockphoto.com/id/1276419340/vector/extrovert-extraversion-and-introversion-concept-a-young-happy-woman-in-the-spotlight-talking.jpg?s=612x612&w=0&k=20&c=f6zyHjaNTDsaGCKpmUGR2dCvoRD7pFtEKctK7AONXiQ=",
      subTraits: [
        { name: "Active" },
        { name: "Assertive" },
        { name: "Cheerful" }
      ]
    },
    {
      id: "2",
      trait: "Openness",
      description: "Openness involves appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience.",
      image: "https://media.istockphoto.com/id/1316496511/vector/open-your-mind.jpg?s=612x612&w=0&k=20&c=Pg05zN4tZFFjsF5zDx0IcIuqKoU-K1plcxYQj7PgQNE=",
      subTraits: [
        { name: "Adventurous" },
        { name: "Artistic" },
        { name: "Emotionally Aware" },
        { name: "Imaginative" },
        { name: "Intellectual" }
      ]
    },
    {
      id: "3",
      trait: "Conscientiousness",
      description: "Conscientiousness is a personality trait characterized by organization, dependability, and discipline.",
      image: "https://st2.depositphotos.com/1000423/7765/i/450/depositphotos_77655500-stock-photo-thinking-mechanism.jpg",
      subTraits: [
        { name: "Cautious" },
        { name: "Disciplined" },
        { name: "Dutiful" },
        { name: "Orderliness" },
        { name: "Self-Efficacy" }
      ]
    },
    {
      id: "4",
      trait: "Neuroticism",
      description: "Neuroticism is a trait characterized by sadness, moodiness, and emotional instability.",
      image: "https://st2.depositphotos.com/12291944/45475/v/450/depositphotos_454752910-stock-illustration-frustrated-person-with-nervous-problem.jpg",
      subTraits: [
        { name: "Melancholy" },
        { name: "Self-Conscious" },
        { name: "Stress-Prone" }
      ]
    },
    {
      id: "5",
      trait: "Agreeableness",
      description: "Agreeableness reflects individual differences in general concern for social harmony. Agreeable individuals value getting along with others.",
      image: "https://www.shutterstock.com/image-vector/woman-feeling-pleasant-breeze-woods-600nw-1763218367.jpg",
      subTraits: [
        { name: "Cooperative" },
        { name: "Trusting" },
        { name: "Altruism" },
        { name: "Modesty" },
        { name: "Sympathy" }
      ]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans items-center">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-purple-700 mb-8">Personality Types</h1>
        <Slider {...settings}>
          {personalityTraits.map((trait) => (
            <div key={trait.id} className="mb-8">
              <h2 className="text-3xl font-semibold text-purple-700 mb-4">{trait.trait}</h2>
              <img src={trait.image} alt={trait.trait} className="w-32 h-32 mx-auto rounded mb-4" />
              <p className="text-gray-600 mb-4">{trait.description}</p>
              <ul className="list-disc list-inside">
                {trait.subTraits.map((subTrait, index) => (
                  <li key={index}>
                    <strong>{subTrait.name}</strong>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </main>
    
    </div>
  );
};

export default PersonalityType;