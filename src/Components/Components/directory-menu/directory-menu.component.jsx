import React, { Component } from 'react';
import './directory-menu.styles.scss';
import MenuItem from './../menu-item/menu-item.component';

class DirectoryMenu extends Component{
    constructor(){
        super();

        this.state = {
            sections:[{
                title: 'hats',
                imageUrl: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://images.unsplash.com/photo-1533230464445-e01ef07c65c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://images.unsplash.com/photo-1597983073453-ef06cfc2240e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, title, imageUrl, size}) => 
                    (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )
                )}
            </div>
        )
    }
}

export default DirectoryMenu;