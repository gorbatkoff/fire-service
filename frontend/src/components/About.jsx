import React from 'react'

import Wrap1 from '../images/img-wrap2.jpg';
import Wrap2 from '../images/img-wrap.jpg';
import Wrap3 from '../images/img-wrap3.jpg';
// import Wrap2 from '../images/img-wrap2.jpg"';
// import Wrap3 from '../images/img-wrap3.jpg"';

export default function About() {
  return (
        <section>
        <div className="about">

            <div className="thesis">
                Пожар может создать героя... <br/> или спрятать секрет.
            </div>

            <div className="paragraph">
                <p>Все мы живем в горящем доме. Пожарным позвонить нельзя, выхода нет. <br/> Нам остается лишь наблюдать
                    из окна, со второго этажа, как горит наш дом. <br/> А мы в ловушке, заперты внутри.
                </p>
            </div>

            <div className="gallery">
                <img src={Wrap1}/>
                <img src={Wrap2}/>
                <img src={Wrap3}/>
                {/* <img src={Wrap2}/> */}
                {/* <img src={Wrpa3}/> */}
            </div>

            <div className="about-us">
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eum cupiditate incidunt qui doloremque
                        corrupti nostrum repellat quae soluta magnam maxime expedita error reiciendis fugit iure sapiente
                        quos exercitationem id, alias voluptatum? Incidunt vitae nam qui dolorem tenetur culpa odio, sed
                        explicabo cumque quae rem, et labore placeat atque nostrum.</p>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sunt pariatur deserunt maiores atque
                        quos voluptatum, facilis, tempora distinctio, iusto ad odio itaque sit. Est, dolores! Ab omnis
                        architecto doloribus consequuntur officiis, nostrum nihil unde ea quaerat qui ad non, ullam tempora
                        consequatur obcaecati quasi modi. Amet sit, ut accusamus voluptatum dignissimos saepe quidem
                        voluptatibus commodi molestiae voluptates minima quasi asperiores suscipit sapiente illum quam ipsa
                        labore. Voluptate quia blanditiis beatae saepe? Vero nam exercitationem tenetur, voluptatum sapiente
                        eligendi id!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
