import flowring  from "./assets/flowring.jpeg"
import seed from "./assets/seed.jpeg"
import germination from "./assets/germination.jpeg"
import sprout from "./assets/sprout.jpeg"
import sp  from "./assets/sp.jpeg"
import  vegitation from "./assets/vegitation.jpeg"
import ripping from "./assets/ripping.jpeg"
import fruit from "./assets/fruitformation.jpeg"
import "./Home.css"
import Header from "./Header"

const  Home= () => {
  return (
    <div >
      <Header/>
     
      <h1>TOMATO LIFE CYCLE</h1>
    <div className="timeline">
    <div className="container left">
      <div className="content">
      <div className="content_pic_text"><img className="img_dim" src={seed} alt="src" />
        <h2>Seed planting</h2>
        </div><div>
        <p className="Content_text">Tomato seeds are typically planted indoors in pots about 6-8 weeks before the last frost. The seeds need to be planted in moist, well-draining soil at a depth of about ¼ inch.</p>
        </div>
     </div>
    </div>
    <div className="container right">
    <div className="content">
    <div className="content_pic_text"><img className="img_dim" src={germination} alt="src" />
        <h2>Germination<span>(6-8 days)</span> </h2>
        </div><div>
        <p className="Content_text">This is the stage when the seed sprouts and a root emerges. It takes about 5-10 days for tomato seeds to germinate. Once the seedlings have emerged, they need to be placed in a sunny location and watered regularly.</p>
        </div></div>
    </div>
    <div className="container left">
    
    <div className="content">
    <div className="content_pic_text"><img className="img_dim" src={sprout} alt="src"  />
        <h2>Sprouting<span>(31-43 days)</span></h2>
        </div><div>
        <p className="Content_text" >The sprout will continue to grow roots and leaves. This stage lasts for about 2-3 weeks. During this time, the seedlings should be thinned out so that there is only one plant per pot.</p>
             </div></div>
    
    </div>
    <div className="container right">
    <div className="content">
    <div className="content_pic_text"><img className="img_dim" src={sp} alt="src" />
        <h2>Seedling <span>(45+ days)</span></h2>
        </div><div>
        <p className="Content_text">Once the plant has a few sets of true leaves, it is considered a seedling. This is the time to transplant tomato seedlings outdoors, if you are growing them in pots. Seedlings should be transplanted after the danger of frost has passed and the soil temperature has warmed to at least 60 degrees Fahrenheit.</p>
        </div></div>
    </div>
    <div className="container left">
    <div className="content">
    <div className="content_pic_text"> <img className="img_dim" src={vegitation} alt="src" />
        <h2>Vegetative growth <span>(51-68 days)</span></h2>
        </div><div>
        <p className="Content_text">The plant will focus on growing strong stems and leaves during this time. This stage lasts for about 4-6 weeks. During this time, the plants should be watered regularly and fertilized with a balanced fertilizer.</p>
        </div></div>
    </div>
    <div className="container right">
    <div className="content">
    <div className="content_pic_text"><img className="img_dim" src={flowring} alt="src" />
       
        <h2>Flowering<span>(71+ days)</span></h2> </div><div>
        <p className="Content_text">Flowers will begin to appear on the plant. This is a sign that the plant is mature and ready to start producing fruit. Flowering typically begins 4-6 weeks after transplanting outdoors.</p>
        </div>
        </div>
    </div>
    <div className="container left">
    <div className="content">
    <div className="content_pic_text"><img className="img_dim" src={fruit} alt="src" />
        
        <h2>Fruit formation<span>(111-121 days)</span></h2>
        </div><div>
        <p className="Content_text">The flowers will pollinate and develop into tomatoes. Fruit development takes about 4-6 weeks, depending on the variety of tomato. During this time, the plants should be watered regularly and fertilized with a fertilizer that is high in phosphorus.</p>
        </div>
    </div>
    </div>
    <div className="container right">
    <div className="content">
      <div className="content_pic_text"> <img className="img_dim" src={ripping} alt="src" />
       
        <h2>Ripening<span>(126-131 days)</span></h2>
        </div> <div>
        <p className="Content_text">The tomatoes will change color from green to red (or yellow, or orange, depending on the variety) as they ripen. Tomatoes take about 3-4 weeks to ripen. Once the tomatoes are ripe, they can be harvested by carefully picking them from the vine</p>
        </div></div>
    </div>
    
  </div>
    </div>
  )
}

export default Home
