var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var GeoJSON = (_temp2 = _class = function (_MapComponent) {
    _inherits(GeoJSON, _MapComponent);

    function GeoJSON() {
        var _temp, _this, _ret;

        _classCallCheck(this, GeoJSON);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _MapComponent.call.apply(_MapComponent, [this].concat(args))), _this), _this.state = {
            dgElement: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    GeoJSON.prototype.componentDidMount = function componentDidMount() {
        this.renderGeoJSON();
    };

    GeoJSON.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.checkPropsChange(['data', 'style', 'pointToLayer', 'onEachFeature', 'onEachFeature'], prevProps)) {
            this.renderGeoJSON();
        }
    };

    GeoJSON.prototype.renderGeoJSON = function renderGeoJSON() {
        var options = {
            style: this.props.style,
            pointToLayer: this.props.pointToLayer,
            onEachFeature: this.props.onEachFeature,
            filter: this.props.filter
        };

        if (this.state.dgElement) {
            this.state.dgElement.remove();
        }

        var dgElement = DG.geoJson(this.props.data, options);
        this.props.element.addLayer(dgElement);

        this.setState({
            dgElement: dgElement
        });
    };

    return GeoJSON;
}(MapComponent), _class.propsTypes = {
    data: PropTypes.object,
    style: PropTypes.object,
    pointToLayer: PropTypes.func,
    onEachFeature: PropTypes.func,
    filter: PropTypes.func
}, _class.defaultProps = {
    style: null,
    pointToLayer: null,
    onEachFeature: null,
    filter: null
}, _temp2);
export { GeoJSON as default };