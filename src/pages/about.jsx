const About = () => { };
export default About;

export async function getStaticProps() {
  return {
    props: {
      fileName: "about"
    }
  };
};
