
import Me from '../assets/me.jpg'
import '../styles.css'


const About = () => {
  return (
    <div name='about' className=' w-full  bg-[#0AA1DD]'>

     <div class="flex justify-center">
   
    <div class=" flex flex-col md:flex-row md:max-w-xxl rounded-lg bg-[#0AA1DD]  shadow-lg">
      <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Me} alt="Me" style={{width:350,marginLeft:"auto",marginRight:"auto"}} />
      <div class="p-6 md:max-w-xl flex flex-col justify-start">
        <h5 class="text-[#ccd4e5] text-5xl font-bold mb-2 ">About Me</h5>
        <div className=' text-4xl font-bold text-white'>
              <p style={{marginTop:20}}>Hi. I'm Renzo, nice to meet you. Please take a look around.</p>
            </div>
        <p class="text-white text-xl mb-4" style={{marginTop:20}}>
        I am passionate about creating innovative web applications. I specialize in the MERN stack (Mongo.db, Express, React.js and Node.js). I am looking to be part of a team where I can apply my knowledge and grow professionally. What would you do if you had the opportunity to interview a guy who is eager to grow and learn in the IT area?
        </p>
       
      </div>
    </div>
  </div>


    </div>
  );
};

export default About;







