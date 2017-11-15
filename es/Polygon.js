var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Polygon = (_temp2 = _class = function (_MapComponent) {
    _inherits(Polygon, _MapComponent);

    function Polygon() {
        var _temp, _this, _ret;

        _classCallCheck(this, Polygon);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _MapComponent.call.apply(_MapComponent, [this].concat(args))), _this), _this.state = {
            dgElement: null,
            childrenForRender: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Polygon.prototype.componentDidMount = function componentDidMount() {
        var dgElement = DG.polygon(this.props.points);

        if (this.props.style) {
            dgElement.setStyle(this.props.style);
        }

        if (this.props.label) {
            dgElement.bindLabel(this.props.label);
        }

        this.setState({
            dgElement: dgElement
        });

        this.bindEvents(dgElement);

        this.props.element.addLayer(dgElement);
    };

    Polygon.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        this.updatePoints(prevProps);
        this.updateLabel(prevProps);
        this.updateStyle(prevProps);
        this.updateEvents(this.state.dgElement);
    };

    return Polygon;
}(MapComponent), _class.propsTypes = {
    style: PropTypes.object,
    points: PropTypes.array,
    label: PropTypes.string
}, _temp2);
export { Polygon as default };