import React, { useEffect, useState } from 'react';
import { Grid, Menu } from 'semantic-ui-react'

const Nav = (props) => {
    const [active, setActive] = useState({activeItem: 'inicio'});


    const menuActive = (e) =>{
        setActive({ 
            activeItem: e.target.id
        });
        console.log(active);
        
    }

    useEffect(() => {
        //menuActive();
    }, []);
    return (
        <Grid.Column width={4}>
            <Menu vertical attached style={{'width':'100%'}}>
                <Menu.Item>
                    <Menu.Header>Menú SQL</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            id='inicio'
                            name='inicio'
                            onClick={menuActive}
                            active={active.activeItem === 'inicio'}
                        />
                        <Menu.Item
                            id='consumer'
                            name='consumer'
                            active={active.activeItem === 'consumer'}
                            onClick={menuActive}
                        />
                        <Menu.Item
                            id='salir'
                            name='salir'
                            active={active.activeItem === 'salir'}
                            onClick={menuActive}
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        </Grid.Column>
    );
}
export default Nav;