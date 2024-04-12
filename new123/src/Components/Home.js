import React from 'react'
import './Home.css'
import image from '../Assets/homeig.png'
import foot_one from '../Assets/img1.jpeg'
import foot_two from '../Assets/img2.jpeg'
import foot_three from '../Assets/img3.jpeg'



const Home = () => {
  return (
    <div>
        <div className='containerbody'>
            <h1>Lorem ipsum dolor sit amet consectetur. Enim in risus curabitur dignissim </h1>
            <h5>Lorem ipsum dolor sit amet consectetur. Enim in risus curabitur dignissim </h5>
            <div><button>Take Test</button></div>
            <div><img src={image}/></div>
            <div className='gh'></div>
        <div className='gh'></div>
        </div>
       <footer>
        <div className='dofooter'>
            <span><img src={foot_one}/></span>
            <span><img src={foot_two}/></span>
            <span><img src={foot_three}/></span>
        </div>
        <div>
            <span>
                <h3>10M+ Community</h3>
                <h6>You can be a member</h6>
            </span>
        </div>
        <div className='stars'>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
       </footer>
        <div className='layer-two'>
            
        </div>
        <div className='two'>
        <h1>Lorem ipsum dolor sit amet consectetur. Enim in risus curabitur dignissim </h1>
        </div>

        <span className='par'>
            <div className="paral"> 
                <h2>Lorem ipsum</h2>
                <h4>Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>
                Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>venenatis purus. Habitasse et blandit.</h4>
            </div>

            <div className="paral">
                <h2>Lorem ipsum</h2>
                <h4>Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>
                Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>venenatis purus. Habitasse et blandit.</h4>
            </div>

            <div className="paral">
                <h2>Lorem ipsum</h2>
                <h4>Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>
                Lorem ipsum dolor sit amet consectetur. Porta ut pretium aliquet sed placerat <br/>venenatis purus. Habitasse et blandit.</h4>
            </div>
        </span>
        <span>
            <div>
                <di><h3>Your Score</h3></di>
                <div>
                    80%
                <h4>Input Score</h4>
                </div>
            </div>
        </span>
        <span></span>
    </div>
  )
}

export default Home