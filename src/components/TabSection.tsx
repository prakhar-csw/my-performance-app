import React from 'react';
import Tabs from './Tabs';

const TabSection = () => {
    const tabArr = [
        {link:'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app',title: "Docs", description: "Find in-depth information about Next.js features and API.",},
        {link:'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app',title: "Learn", description: "Learn about Next.js in an interactive course with quizzes!",},
        {link:'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app',title: "Deploy", description: "Instantly deploy your Next.js site to a shareable URL with Vercel.",},
        {link:'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app',title: "Templates", description: "Discover and deploy boilerplate example Next.js&nbsp;projects.",},
      ];
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
         {tabArr.map((tabs, index)=>(
          <Tabs link={tabs.link} title={tabs.title} description={tabs.description} key={index}/>
        ))}
    </div>
  )
}

export default TabSection