import React, { useContext, useState } from 'react'
// import { Button, TextField } from "@mui/material";
import { multiStepContext } from '../StepContext';
import { Button, TextField, Checkbox, Radio, FormLabel, FormControlLabel, RadioGroup, FormGroup } from "@mui/material";
import "./firststep/firststep.css";

function ThirdStep() {

    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext)
    const [toggle, setToggle] = useState();
    const handleToggleYes = () => {
        setToggle(true)
    }
    const handleToggleNo = () => {
        setToggle(false)
    }
    return (

        <div>
            {/* <div className='first-row'>
                <div>
                    <TextField label="Service User" value={userData['serviceuser']} onChange={(e) => setUserData({ ...userData, 'serviceuser': e.target.value })} margin="normal" variant="standard" />
                </div>
                <div>
                    <TextField label="Pick-Up Time/Place" value={userData['pickup']} onChange={(e) => setUserData({ ...userData, 'pickup': e.target.value })} margin="normal" variant="standard" />
                </div>
            </div>
            <div className='second-row'>
                <div>
                    <TextField label="Staff Completing Form" value={userData['staffcomplete']} onChange={(e) => setUserData({ ...userData, 'staffcomplete': e.target.value })} margin="normal" variant="standard" />
                </div>
                <div>
                    <TextField label="Arrival Time at Centre" value={userData['arrivaltime']} onChange={(e) => setUserData({ ...userData, 'arrivaltime': e.target.value })} margin="normal" variant="standard" />
                </div>
            </div>
            <div className='third-row'>
                <div>
                    <TextField label="Date/Day" value={userData['dateday']} onChange={(e) => setUserData({ ...userData, 'dateday': e.target.value })} margin="normal" variant="standard" />
                </div>
                <div>
                    <TextField label="Drop-Off Time/Place" value={userData['dropoff']} onChange={(e) => setUserData({ ...userData, 'dropoff': e.target.value })} margin="normal" variant="standard" />
                </div>
            </div>
            <div className='fourth-row'>
                <div>
                    <TextField style={{ width: 'calc(100%)' }} label="Who Collected/Dropped off" value={userData['whocollected']} onChange={(e) => setUserData({ ...userData, 'whocollected': e.target.value })} margin="normal" variant="standard" />
                </div>
            </div> */}
            {/* <div style={{ marginTop: "30px", padding: "5px 10px", width: '100%', display: "flex", alignItems: "center", backgroundColor: "lightblue", borderRadius: "5px" }}>
                <FormLabel style={{ fontWeight: "bold", marginRight: "20px" }} id="demo-radio-buttons-group-label">Anything to Report from Parents/Carer:</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ marginRight: "20px" }} />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </div>
            <div style={{ marginTop: "25px", padding: "5px 10px", display: "flex" }}>
                <div style={{ flex: "1", marginRight: "20px" }}>
                    <FormLabel component="legend">(If Yes Please Specify)</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="settledMood" />}
                            label="Settled Mood"
                        />
                        <FormControlLabel
                            control={<Checkbox name="positiveBehaviour" />}
                            label="Positive Behaviour"
                        />
                        <FormControlLabel
                            control={<Checkbox name="goodSleep" />}
                            label="Good Sleep"
                        />
                        <FormControlLabel
                            control={<Checkbox name="cooperative" />}
                            label="Co-operative"
                        />
                        <FormControlLabel
                            control={<Checkbox name="unsettledMood" />}
                            label="Un-Settled Mood"
                        />
                        <FormControlLabel
                            control={<Checkbox name="negativeBehaviour" />}
                            label="Negative Behaviour"
                        />
                    </FormGroup>
                </div>
                <div style={{ flex: "1" }}>
                    <FormLabel component="legend">&nbsp;</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox name="notGoodSleep" />}
                            label="Not a Good Sleep"
                        />
                        <FormControlLabel
                            control={<Checkbox name="nonCooperative" />}
                            label="Non-Cooperative"
                        />
                        <FormControlLabel
                            control={<Checkbox name="agitated" />}
                            label="Agitated"
                        />
                        <FormControlLabel
                            control={<Checkbox name="aggressive" />}
                            label="Aggressive"
                        />
                        <FormControlLabel
                            control={<Checkbox name="haveBreakfast" />}
                            label="Have Breakfast"
                        />
                        <FormControlLabel
                            control={<Checkbox name="noBreakfast" />}
                            label="No Breakfast"
                        />
                    </FormGroup>
                </div>
            </div>
            <div style={{ marginTop: "25px" }}>
                <TextField
                    style={{ width: 'calc(100%)' }}
                    id="outlined-multiline-static"
                    label="Anything additional to report"
                    multiline
                    rows={4}
                />
            </div> */}

            <div style={{ marginTop: "30px", padding: "5px 10px", width: '100%', display: "flex", flexDirection: "column", borderRadius: "5px", backgroundColor: "lightblue" }}>
                <div style={{}}>
                    <FormLabel style={{ fontWeight: "bold", marginRight: "20px" }} id="demo-radio-buttons-group-label">Service User Mood Expressions when arrived at Centre:</FormLabel>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 10px", width: '100%' }}>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
                        <FormControlLabel value="good" control={<Radio />} label="&#x1F642;" />
                        <FormControlLabel value="normal" control={<Radio />} label="&#x1F610;" />
                        <FormControlLabel value="bad" control={<Radio />} label="&#x1F641;" />
                    </RadioGroup>
                </div>
            </div>
            <div style={{ marginTop: "30px", padding: "5px 10px", width: '100%', display: "flex", alignItems: "center", backgroundColor: "lightgreen", borderRadius: "5px" }}>
                <FormLabel style={{ fontWeight: "bold", marginRight: "20px" }} id="demo-radio-buttons-group-label">Personal Care:</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" style={{ display: "flex", flexDirection: "row" }}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ marginRight: "20px" }} onClick={() => handleToggleYes()} />
                    <FormControlLabel value="no" control={<Radio />} label="No" onClick={() => handleToggleNo()} />
                </RadioGroup>
            </div>
            {
                toggle ?
                    <>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ marginTop: "25px", padding: "5px 10px", display: "flex" }}>
                                <div style={{ flex: "1", marginRight: "20px" }}>
                                    <FormLabel component="legend">(Specify which type of care)</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox name="settledMood" />}
                                            label="Showering"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="positiveBehaviour" />}
                                            label="Shaving"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="goodSleep" />}
                                            label="Hair Drying"
                                        />

                                    </FormGroup>
                                </div>
                                <div style={{ flex: "1" }}>
                                    <FormLabel component="legend">&nbsp;</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox name="notGoodSleep" />}
                                            label="Brushing Teeth"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="nonCooperative" />}
                                            label="Clothes Changing"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox name="agitated" />}
                                            label="Hair Cut"
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div style={{ padding: "5px 10px" }}>
                                <FormLabel style={{ fontWeight: "bold", marginRight: "20px" }} id="demo-radio-buttons-group-label">
                                    Opened Bowel using Toilet:
                                </FormLabel>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "30px" }}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ marginRight: "20px" }} />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    <div>
                                        <TextField

                                            label="Time:"
                                            value={userData['openedBowelTime']}
                                            onChange={(e) => setUserData({ ...userData, 'openedBowelTime': e.target.value })}
                                            margin="normal"
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "30px 10px" }}>
                                <FormLabel style={{ fontWeight: "bold", marginRight: "20px" }} id="demo-radio-buttons-group-label">
                                    Urinated Using Toilet:
                                </FormLabel>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group" style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "30px" }}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" style={{ marginRight: "20px" }} />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                    <div>
                                        <TextField

                                            label="Time:"
                                            value={userData['urinatedTime']}
                                            onChange={(e) => setUserData({ ...userData, 'urinatedTime': e.target.value })}
                                            margin="normal"
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }

            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <Button variant="contained" onClick={() => setCurrentStep(2)} color="secondary">Back</Button>
                <Button variant="contained" onClick={submitData} color="primary">Submit</Button>
            </div>
        </div>


    )
}

export default ThirdStep
