import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionsPreview from '../../Components/collections-preview/collections-preivew.component';


class ShopPage extends React.Component{
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className='shop-page'>
                {
                collections.map(({id, ...otherCollectionProps}) => 
                <CollectionsPreview key={id} {...otherCollectionProps}/>
                )}
            </div>
        )
    }
}

export default ShopPage;