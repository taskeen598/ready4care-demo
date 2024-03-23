import React, { useContext } from 'react';
import './App.css';
import FirstStep from './components/firststep/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper, StepLabel, Step } from '@mui/material';
import { multiStepContext } from './StepContext';
import DisplayData from './components/DisplayData';
import TestDoc from './components/TestDoc';

function App() {
	const { currentStep, finalData } = useContext(multiStepContext);

	function showStep(step) {
		switch (step) {
			case 1:
				return (
					<>
						<center>
							<h3 style={{ color: 'black', paddingTop: "3%", fontSize: "2rem" }}>DAILY LOG</h3>
						</center>
						<FirstStep />
					</>
				);
			case 2:
				return (
					<>
						<center>
							<h3 style={{ color: 'black', paddingTop: "3%", fontSize: "2rem" }}>DAILY LOG</h3>
						</center><SecondStep />
					</>
				);
			case 3:
				return (
					<>
						<center>
							<h3 style={{ color: 'black', paddingTop: "3%", fontSize: "2rem" }}>DAILY LOG</h3>
						</center><ThirdStep />
					</>
				);
			default:
				return null;
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<div className="center-stepper">
					<h3 style={{ color: 'blue', paddingTop: "3%", fontSize: "40px" }}>Ready For Life</h3>
					<Stepper style={{ width: '20%', paddingTop: "3%" }} activeStep={currentStep - 1} orientation="horizontal">
						<Step>
							<StepLabel></StepLabel>
						</Step>
						<Step>
							<StepLabel></StepLabel>
						</Step>
						<Step>
							<StepLabel></StepLabel>
						</Step>
					</Stepper>
					<div className='form-content' style={{ marginTop: "2%" }}>
						{showStep(currentStep)}
					</div>
					<TestDoc />
					<br />
				</div>
				{finalData.length > 0 ? <DisplayData /> : ''}
			</header>
		</div>

	);
}

export default App;