import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import ProjectCard from './ProjectCard'; // Import your ProjectCard component

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 1200, height: 800 }, 
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            title: 'Project One',
            img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format',
            problem: 'Some problem description for project one.',
            solution: 'Some solution description for project one.',
            techStacks: ['React', 'Tailwind', 'Motion'],
            github: 'https://github.com/',
            contributedAs: 'Frontend Developer',
            readMoreLink: '#'
          },
          {
            id: 2,
            title: 'Project Two',
            img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format',
            problem: 'Some problem description for project two.',
            solution: 'Some solution description for project two.',
            techStacks: ['Node.js', 'Express', 'PostgreSQL'],
            github: 'https://github.com/',
            contributedAs: 'Fullstack Developer',
            readMoreLink: '#'
          }
        ]
  );

  const sendToBack = id => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <ProjectCard
                title={card.title}
                img={card.img}
                problem={card.problem}
                solution={card.solution}
                techStacks={card.techStacks}
                github={card.github}
                contributedAs={card.contributedAs}
                readMoreLink={card.readMoreLink}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
