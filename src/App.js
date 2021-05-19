import logo from './logo.svg';
import './App.css';
import profilepic from './img/Meow.png';
import { SocialIcon} from 'react-social-icons';

import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react';

function App() {
  return (
    <main className = "relative">
        <div className = "p-10 lg:pt-36 container mx-auto relative">
                
                <section className = "bg-green-100 rounded-lg shadow-2xl lg:flex p-20 " > 
                  <img src={profilepic} className = "rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                  <div className="text-lg flex flex-col justify-center">
                    <h1 className="cursive text-3xl text-black-800 mb-4">
                    
                      <span className = "text-black-800">Gabi Abdennabi</span>
                      <div className ="prose lg:prose-l text-black">
                      Entry Level Software Engineer, seeking to use skills to 
                  design, develop, test and maintain software applications.
                  Fast learner with strong time management and multitasking
                  skills. Strong work ethic in team or individual settings
                  to drive product success and process efficiency
          
                        
                      </div>
                      
                    </h1>
            
                  </div>
                </section>
        
                </div>
        
        <div className="socials">
  
        <a class="mailto" href="mailto:gabde002@fiu.edu">Contact Me</a>
  
        <button>
  
  <a className =  "x" href="https://drive.google.com/file/d/1FBsV_lxON6Fdo8RmJJ7QadncmrVE6dLJ/view?usp=sharing">Resume CV</a>
  </button>
         
          <a>
           <SocialIcon url="https://github.com/GabiAbdennabi"></SocialIcon>
           </a>
           <a>
           <SocialIcon url="https://www.linkedin.com/in/gabriella-abdennabi-036904126/"></SocialIcon>
           </a>
              </div>
    </main>
    );
}

export default App;
