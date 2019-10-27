import React from 'react';
import PropTypes from 'prop-types';
import {  FormCheckbox } from "shards-react"
//import { Test } from './Servicesradio.styles';
import styles from './Servicesradio.module.scss';

const Servicesradio = (props) =>{
  return (
    <div className={styles.Servicesradio}>
      <fieldset>
        <FormCheckbox>{props.ServiceName}</FormCheckbox>
    </fieldset>
    </div>
  )
}

export default Servicesradio;
