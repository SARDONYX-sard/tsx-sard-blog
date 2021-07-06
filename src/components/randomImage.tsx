import { useState, useEffect } from 'react';
import index from '../styles/index.module.css';

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export default function RandomImg({ siteTitle }: { siteTitle: string }) {
  const imgs = ['daffodils', 'kissingSpring', 'springFlower', 'orangeFlower', 'threeCuteChicks'];

  const [ind, setInd] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInd(getRandomInt(imgs.length));
    }
  }, []);
  // console.log(imgs[ind])
  return (
    <>
      <style jsx>
        {`
          .${index.title}::before {
            background-image: url(/images/${imgs[ind]}.webp);
          }
        `}
      </style>

      <header className={index.title}>
        <h1 className={index.h1}>{siteTitle}</h1>
        <p>学んだ技術や知識をまとめておく場所</p>
      </header>
    </>
  );
}
