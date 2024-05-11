import flowring  from "./assets/flowring.jpeg"
import seed from "./assets/seed.jpeg"
import germination from "./assets/germination.jpeg"
import sprout from "./assets/sprout.jpeg"
import sp  from "./assets/sp.jpeg"
import  vegitation from "./assets/vegitation.jpeg"
import ripping from "./assets/ripping.jpeg"
import fruit from "./assets/fruitformation.jpeg"
import "./Home.css"
const  Home= () => {
  return (
    <div >
      <h1>TOMATO LIFE CYCLE</h1>
    <div className="timeline">
    <div className="container left">
      <div className="content">
        <img src={seed} alt="src" />
        <div>
        <h2>Seed planting</h2>
        <p>Tomato seeds are typically planted indoors in pots about 6-8 weeks before the last frost. The seeds need to be planted in moist, well-draining soil at a depth of about ¼ inch.</p>
        </div>
     </div>
    </div>
    <div className="container right">
    <div className="content">
        <img src={germination} alt="src" />
        <div>
        <h2>Germination</h2>
        <p>This is the stage when the seed sprouts and a root emerges. It takes about 5-10 days for tomato seeds to germinate. Once the seedlings have emerged, they need to be placed in a sunny location and watered regularly.</p>
        </div></div>
    </div>
    <div className="container left">
    
    <div className="content">
        <img src={sprout} alt="src"  />
        <div>
        <h2>Sprouting</h2>
        <p>The sprout will continue to grow roots and leaves. This stage lasts for about 2-3 weeks. During this time, the seedlings should be thinned out so that there is only one plant per pot.</p>
             </div></div>
    
    </div>
    <div className="container right">
    <div className="content">
        <img src={sp} alt="src" />
        <div>
        <h2>Seedling</h2>
        <p>Once the plant has a few sets of true leaves, it is considered a seedling. This is the time to transplant tomato seedlings outdoors, if you are growing them in pots. Seedlings should be transplanted after the danger of frost has passed and the soil temperature has warmed to at least 60 degrees Fahrenheit.</p>
        </div></div>
    </div>
    <div className="container left">
    <div className="content">
        <img src={vegitation} alt="src" />
        <div>
        <h2>Vegetative growth</h2>
        <p>The plant will focus on growing strong stems and leaves during this time. This stage lasts for about 4-6 weeks. During this time, the plants should be watered regularly and fertilized with a balanced fertilizer.</p>
        </div></div>
    </div>
    <div className="container right">
    <div className="content">
        <img src={flowring} alt="src" />
        <div>
        <h2>Flowering</h2>
        <p>Flowers will begin to appear on the plant. This is a sign that the plant is mature and ready to start producing fruit. Flowering typically begins 4-6 weeks after transplanting outdoors.</p>
        </div>
        </div>
    </div>
    <div className="container left">
    <div className="content">
        <img src={fruit} alt="src" />
        <div>
        <h2>Fruit formation</h2>
        <p>The flowers will pollinate and develop into tomatoes. Fruit development takes about 4-6 weeks, depending on the variety of tomato. During this time, the plants should be watered regularly and fertilized with a fertilizer that is high in phosphorus.</p>
        </div>
    </div>
    </div>
    <div className="container right">
    <div className="content">
        <img src={ripping} alt="src" />
        <div>
        <h2>Ripening</h2>
        <p>The tomatoes will change color from green to red (or yellow, or orange, depending on the variety) as they ripen. Tomatoes take about 3-4 weeks to ripen. Once the tomatoes are ripe, they can be harvested by carefully picking them from the vine</p>
        </div></div>
    </div>
    
  </div>
    </div>
  )
}

export default Home
