var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Map = (_temp2 = _class = function (_MapComponent) {
    _inherits(Map, _MapComponent);

    function Map() {
        var _temp, _this, _ret;

        _classCallCheck(this, Map);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _MapComponent.call.apply(_MapComponent, [this].concat(args))), _this), _this.state = {
            dgElement: null,
            childrenForRender: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Map.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var container = this.refs.container;

        // Map options.

        var _props = this.props,
            zoom = _props.zoom,
            center = _props.center,
            geoclicker = _props.geoclicker,
            projectDetector = _props.projectDetector,
            zoomControl = _props.zoomControl,
            fullscreenControl = _props.fullscreenControl,
            preferCanvas = _props.preferCanvas,
            touchZoom = _props.touchZoom,
            scrollWheelZoom = _props.scrollWheelZoom,
            doubleClickZoom = _props.doubleClickZoom,
            dragging = _props.dragging,
            maxBounds = _props.maxBounds,
            minZoom = _props.minZoom,
            maxZoom = _props.maxZoom;


        var options = {
            zoom: zoom, center: center, geoclicker: geoclicker, projectDetector: projectDetector, zoomControl: zoomControl, fullscreenControl: fullscreenControl, preferCanvas: preferCanvas, touchZoom: touchZoom,
            scrollWheelZoom: scrollWheelZoom, doubleClickZoom: doubleClickZoom, dragging: dragging, maxBounds: maxBounds, minZoom: minZoom, maxZoom: maxZoom
        };

        // Check exist prop center.
        if (!center) {
            console.error('For initial map You should set prop \'center\'.');
        }

        // Check exist zoom center.
        if (!zoom) {
            console.error('For initial map You should set prop \'zoom\'.');
        }

        // Create Map.
        var dgElement = DG.map(container, options);

        if (this.props.onProjectChange) {
            dgElement.on('projectchange', function (e) {
                return _this2.props.onProjectChange(e);
            });
        }

        if (this.props.onProjectLeave) {
            dgElement.on('projectleave', function (e) {
                return _this2.props.onProjectLeave(e);
            });
        }

        this.setState({
            dgElement: dgElement
        });

        this.bindEvents(dgElement);
    };

    Map.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var dgElement = this.state.dgElement;


        if (this.checkPropsChange('center', prevProps)) {
            dgElement.setView(this.props.center);
        }

        if (this.checkPropsChange('zoom', prevProps)) {
            dgElement.setZoom(this.props.zoom);
        }

        if (this.checkPropsChange('style', prevProps)) {
            dgElement.invalidateSize();
        }

        this.updateEvents(dgElement, prevProps);
    };

    Map.prototype.render = function render() {
        return React.createElement(
            'div',
            { ref: 'container', style: this.props.style },
            _MapComponent.prototype.render.call(this)
        );
    };

    return Map;
}(MapComponent), _class.propsTypes = {
    style: PropTypes.object,
    center: PropTypes.array,
    zoom: PropTypes.number,
    geoclicker: PropTypes.bool,
    projectDetector: PropTypes.bool,
    zoomControl: PropTypes.bool,
    fullscreenControl: PropTypes.bool,
    preferCanvas: PropTypes.bool,
    touchZoom: PropTypes.bool,
    scrollWheelZoom: PropTypes.bool,
    doubleClickZoom: PropTypes.bool,
    dragging: PropTypes.bool,
    maxBounds: PropTypes.array,
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number
}, _class.defaultProps = {
    zoom: false,
    center: false,
    geoclicker: false,
    projectDetector: false,
    zoomControl: true,
    fullscreenControl: true,
    preferCanvas: true,
    touchZoom: true,
    scrollWheelZoom: true,
    doubleClickZoom: true,
    dragging: true
}, _temp2);
export { Map as default };