import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styles from './index.module.scss';

const SubMenu = ({ data, title }) => {
  return (
    <div className={styles.subMenu}>
      {
        title ?
          <h2 className={styles.subMenuTitle}>
            <FormattedMessage id={title} />
          </h2> :
        null
      }
      {data.map((item) => {
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={styles.subMenuItem}
            activeStyle={{ background: '#eee' }}
          >
            <FormattedMessage id={item.name} />
          </NavLink>
        );
      })}
    </div>
  );
};

SubMenu.defaultProps = {
  title: '',
};

SubMenu.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default SubMenu;
