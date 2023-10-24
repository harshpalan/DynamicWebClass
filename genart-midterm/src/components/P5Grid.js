import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FourFoldSketch from "./p5/FourFold";
import SpiralSketch from "./p5/Spiral";
import MandalaSketch from "./p5/Mandala";
import MatrixRainSketch from "./p5/MatrixRain";
import FlowFieldSketch from "./p5/FlowField";
import LetterRainSketch from "./p5/LetterRain";
import KaleidoscopeSketch from "./p5/Kaleidoscope";
import FlowerSketch from "./p5/Flower";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Rating from "./Rating";
import "../styles/style.css";

const P5Grid = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={FourFoldSketch} />
						<div className="rating">
							<Rating />
						</div>
					</div>
				</Col>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={SpiralSketch} />
						<Rating />
					</div>
				</Col>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={MandalaSketch} />
						<Rating />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={MatrixRainSketch} />
						<Rating />
					</div>
				</Col>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={FlowFieldSketch} />
						<Rating />
					</div>
				</Col>
				<Col>
					<div className="canvas-container">
					<ReactP5Wrapper sketch={LetterRainSketch} />
					<Rating />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={KaleidoscopeSketch} />
						<Rating />
					</div>
				</Col>
				<Col>
					<div className="canvas-container">
						<ReactP5Wrapper sketch={FlowerSketch} />
						<Rating />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default P5Grid;
