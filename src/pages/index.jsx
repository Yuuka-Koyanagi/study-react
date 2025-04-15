export default function Home() { };

export async function getStaticProps() {
  return {
    props: {
      fileName: "index"
    }
  };
};
