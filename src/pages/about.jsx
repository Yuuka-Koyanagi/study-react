export default function About() { };

export async function getStaticProps() {
  return {
    props: {
      fileName: "about"
    }
  };
};
