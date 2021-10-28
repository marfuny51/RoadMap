import React, { Component }from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'clsx';

import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import appRoutes from 'core/app-routes';

import './side-navigation-menu.scss';

export default class SideNavigationMenu extends Component {
  state = {
    isSidebarExpanded: false,
  };

  toggleSidebar = () => {
    this.setState({ isSidebarExpanded: !this.state.isSidebarExpanded });
  };
  render() {
    return (
      <React.Fragment>
        <div
					className={classNames('sidebar-menu', {
						'sidebar-menu_expanded': this.state.isSidebarExpanded,
					})}
				>
					<div className="sidebar-menu__navigation">
						<button
							type="button"
							onClick={this.toggleSidebar}
							className="sidebar-menu__burger"
						>
							<MenuIcon />
						</button>
						<div className="sidebar-menu__menu-container">
							{appRoutes.map((item, index) => (
								<NavLink
									key={index}
									to={item.path}
									className="routing-link"
									activeClassName="routing-link--active"
								>
									{item.title}
								</NavLink>
							))}
						</div>
					</div>
				</div>
      </React.Fragment>
    );
  }
}
