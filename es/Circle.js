var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import DG from '2gis-maps';
import MapComponent from './MapComponent';

var Circle = (_temp2 = _class = function (_MapComponent) {
    _inherits(Circle, _MapComponent);

    function Circle() {
        var _temp, _this, _ret;

        _classCallCheck(this, Circle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _MapComponent.call.apply(_MapComponent, [this].concat(args))), _this), _this.state = {
            dgElement: null,
            childrenForRender: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Circle.prototype.componentDidMount = function componentDidMount() {
        var dgElement = DG.circle(this.props.pos, this.props.radius);

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

    Circle.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var dgElement = this.state.dgElement;


        this.updatePos(prevProps);

        if (this.checkPropsChange('radius', prevProps)) {
            dgElement.setRadius(this.props.radius);
        }

        this.updateLabel(prevProps);

        this.updateStyle(prevProps);

        this.updateEvents(dgElement, prevProps);
    };

    return Circle;
}(MapComponent), _class.propsTypes = {
    style: PropTypes.object,
    pos: PropTypes.array,
    radius: PropTypes.number,
    label: PropTypes.string
}, _temp2);
export { Circle as default };