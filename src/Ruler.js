import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DG from '2gis-maps'
import MapComponent from './MapComponent'

export default class Ruler extends MapComponent {
    static propsTypes = {
        points: PropTypes.array
    };

    state = {
        dgElement: null
    };

    componentDidMount() {
        let dgElement = DG.ruler(this.props.points);
        this.props.element.addLayer(dgElement);
        this.setState({
            dgElement: dgElement
        });
    }

    componentDidUpdate(prevProps, prevState) {
        this.updatePoints(prevProps);
    }
}
