import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DatePicker from './DatePicker';
import { Select } from '@mui/material';
import SelectGroup from './SelectGroup';
import { useActivity } from '../../../providers/ActivityProvider';
import { ActivityProvider } from '../../../providers/ActivityProvider';
import MoreInformation from './MoreInformation';
import {Activity} from '../../../../../common/types/models/Activity'
import { useAlert } from '../../../providers/Alert';

const steps = ['בחירת תאריכים', 'בחירת קבוצה', 'מידע נוסף'];
const componentsSetps = [<DatePicker />, <SelectGroup />, <MoreInformation />];

export default function HorizontalNonLinearStepper({onClose}) {
  const {reset, name, rank, loaction, role, gender, startTime, endTime, description, type} = useActivity();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const {success} = useAlert();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const addActivity = (activity: Activity) => {
    const activities = JSON.parse(localStorage.getItem('activities')?? '[]');
    activities.push(activity);
    localStorage.setItem('activities', JSON.stringify(activities)); 
  }
  const handleSubmit = () => {
    const activity = {name, rank, loaction, role, gender, startTime, endTime, description, type};
    addActivity(activity as unknown as Activity);
    handleReset();
    success('התורנות נוספה בהצלחה!');
    onClose();
  }

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    if(isLastStep()) {
      handleSubmit();
    }
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    reset();
  };

  return (    
      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          { (
            <React.Fragment>
              {componentsSetps[activeStep]}
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color='inherit'
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}>
                  חזור
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  המשך
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    componentsSetps[activeStep]
                  ) : (
                    <Button onClick={handleComplete}>
                      {completedSteps() === totalSteps() - 1
                        ? 'Finish'
                        : 'Complete Step'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
  );
}
