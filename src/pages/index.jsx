const Home = () => { };
export default Home;

export async function getStaticProps() {
  return {
    props: {
      fileName: "index"
    }
  };
};
