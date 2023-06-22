import React from 'react';
import Header from './header';
import Block2 from './block_2';

import img1 from "../assets/image/i1.png";

class Recipes extends React.Component {
    rec = [
        {
            id: 1,
            img: img1,
            title: "Jelly from Genshin Impact",
            mini_desc: "This is the Mint Jelly recipe from Genshin Impact. I really like jelly, and it also looks beautiful. I think you will definitely like it! Recipe from the channel: Matt the Cat",
            big_desc: "This is the Mint Jelly recipe from Genshin Impact. I really like jelly, and it also looks beautiful. I think you will definitely like it! Recipe from the channel: Matt the Cat",
            water: "95 %",
            carbohydrates: "20g per 100g",
            fats: "0.02g per 100g",
            cooking_header: "🌿 Mint jelly recipe",
            cooking: "1. Boil mint leaves in water \n 2. Pour gelatin into this solution and sugar \n 3. Cool the solution and refrigerate for an hour so that the gelatin hardens \n 4. Remove the jelly from the bowl and put it on a plate \n 5. Enjoy your meal!"
        },
    ]

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Header />
                    <Block2 title="List of recipes" desc="This is the main page of my site, there are a lot, or maybe not a lot, of various dishes. You can search for something to your liking."/>
                    <div className='col'></div>
                    <div className='col-4 moki_1'></div>
                    {this.rec.map((el) => (<div className='col-6' key={el.id}>
                        <div className="element">
                            <div>
                                <p className='text__el_big'>{el.title}</p>
                                <p className='text__el_small'>{el.mini_desc}</p>
                            </div>
                            <a href={`/dishes/${el.id}`} className='link__el'>
                                <div className='img__block_1__button el'></div>
                            </a>
                        </div>
                    </div>))}
                    <Block2 title="End?..." desc="For now, these are all the recipes I have, but there will be more recipes in the future! Therefore, you can go to the site and follow the updates! There is a version in the header of the site, with it you can track changes and updates. That's all, good luck! Tao tao tao"/>
                </div>
            </div>
        )
    }
}

export default Recipes;
export const recList = new Recipes().rec;