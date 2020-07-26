import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText, NavLink  } from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
    }
    state={
        isOpen: false
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink className='nav-link' to='/'>
                        Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className='nav-link' to='/addP'>
                        Add Product
                    </NavLink>
                  </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default Header
