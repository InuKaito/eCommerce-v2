import React from 'react';
import '../SCSS/HomeBody.scss';
import i1 from '../ProductImg/00Riser.jpg';
import i2 from '../ProductImg/Gundamfreedom.jpg';
import i3 from '../ProductImg/AstrayRedFrame.jpg';
import i4 from '../ProductImg/00gundamsevensword.jpg';

function Body () {
    return (
        <div>
        <main class="grid-container">
        <div class="grid-item"> <img src={i1} class="product__img" alt="img" />
            <h3>Trans-am Riser Clear Color Body 1/60 (scale) Perfect Grade</h3>
            <h3>Price:</h3>
            <p>$128.16</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>Clear exterior parts for enjoying PG Transam Riser as a clear color kit appeared! From "Mobile Suit
                Gundam 00".</p>
        </div>
        <div class="grid-item"> <img src={i2} class="product__img" alt="img" />
            <h3>Strike Freedom Gundam 1/60 (scale) Perfect Grade</h3>
            <h3>Price:</h3>
            <p>$242.00</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>The Strike Freedom Gundam from Gundam Seed Destiny makes its debut into the PG line featuring brand new
                styling with extreme articulation and unprecedented mechanical detail.</p>
        </div>
        <div class="grid-item"> <img src={i3} class="product__img" alt="img" />
            <h3>Gundam Seed Astray Red Frame 1/60 (scale) Perfect Grade</h3>
            <h3>Price:</h3>
            <p>$172.45</p>
            <button class="button" >Buy</button>
            <h3>Description:</h3>
            <p>Secretly in development for 4 years, the PG Gundam Astray Red Frame makes its big debut.</p>
        </div>
        <div class="grid-item"> <img src={i4} class="product__img" alt="img" />
            <h3>Gundam Seven Sword/G Gundam 00 1/60 (scale) Perfect Grade</h3>
            <h3>Price:</h3>
            <p>$186.88</p>
            <button class="button">Buy</button>
            <h3>Description:</h3>
            <p>Under the supervision of its original designer, Kanetake Ebikawa, the 00 Gundam is re-introduced to the
                Perfect Grade.</p>
        </div>
    </main>
    </div>
    )
}

export default Body;