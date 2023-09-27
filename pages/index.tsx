import About from '@/components/about/About';
import Intro from '@/components/intro/Intro';
import Projects from '@/components/projects/Projects';
import Stack from '@/components/stack/Stack';

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Stack />
      <Projects />
    </>
  );
}

// export async function getStaticProps() {
//   const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Notion-Version': '2022-02-22',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   };

//   const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}`, options);
//   const result = await res.json();
//   console.log(result);

//   return {
//     props: {},
//     revalidate: 3600,
//   };
// }
