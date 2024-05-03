import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'


function Header(){

    return(
    <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full xl:mx-12 xl:pt-32 xl:pb-40 lg:pt-40 lg:pb-40 pt-24 pb-12">
            <div>        
              <div>
                <h1 className="text-4xl font-semibold tracking-tight pb-8 sm:text-7xl">
                    About us  
                </h1>
                {/* lists in body */}
                <p className="mt-6 text-2xl leading-10 text-black max-w-5xl ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officiis possimus porro commodi, perferendis necessitatibus aperiam repellat non doloremque voluptatem, natus reiciendis unde iusto perspiciatis, consequuntur delectus alias adipisci architecto minus voluptates? Excepturi odit, odio dicta perferendis corporis error repellendus. Sapiente sequi doloremque quidem totam voluptates eligendi, odit iusto quod odio dolorum hic laudantium deleniti, ea, vero nihil! Reiciendis accusamus assumenda debitis animi, tempore optio corrupti repellendus. Adipisci quo dolorem, optio soluta odio explicabo rerum eius nulla saepe mollitia itaque tempore! Nemo ipsam sit pariatur, cupiditate deleniti aspernatur expedita perspiciatis temporibus, sint, velit sunt repellendus omnis magnam adipisci! Iusto, hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Header;