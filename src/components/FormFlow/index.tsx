import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const steps = ['Form Submission', 'Hod Approval', 'Master Approval', 'Completed'];

interface formflowProps {
    form:any;
}

const verifyStaffFormStatus = (status: string) => {
    if(status === "NOTSUBMITTED")return 0;
    return 1;
}

const higherUpVerify = (status: string) => {
    if(status === "PENDING") return 0;
    else if (status === "APPROVED") return 1;
    else if (status === "REJECTED") return 2;
}

const FormFlow : React.FC<formflowProps> = (props) =>{
    const {form} = props;
    useEffect(()=>{
        AppliedStateOfForm();
    },[])

    const [current_step, setCurrentStep] = useState<number>(0);
    const [failed_step, setFailedStep] = useState<number>(-1);
    const AppliedStateOfForm = async() => {
        try {
            const hod_value = higherUpVerify(form.hod_status);
            const master_value = higherUpVerify(form.master_status);

            //  success message

            if(form.user_form_status === "NOTSUBMITTED"){setCurrentStep(-1);return;}
            if(form.user_form_status === "SUBMITTED" && form.hod_status === "PENDING"){setCurrentStep(1);return;}
            if(form.user_form_status === "SUBMITTED" && form.hod_status === "APPROVED" && form.master_status === "PENDING"){setCurrentStep(2);return;}
            if (form.user_form_status === "SUBMITTED" && form.hod_status === "APPROVED" && form.master_status === "APPROVED"){setCurrentStep(3);return;}

            if(form.hod_status === "REJECTED"){
                setFailedStep(1);
                return;
            }
            if (form.master_status === "REJECTED") {
                setFailedStep(2);
                return; 
            }

        } catch (err: any) {
            console.log(err)
        }
    }

    const isStepFailed = (step: number) => {
        return step === failed_step;
    };

    return (
        <>  
            <div className="rounded-[8px] shadow-sm bg-white p-[16px] flex flex-col gap-[16px]">
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={current_step} >
                            {steps.map((label, index) => {
                                const labelProps: {
                                    optional?: React.ReactNode;
                                    error?: boolean;
                                } = {};
                                if (isStepFailed(index)) {
                                    labelProps.optional = (
                                        <Typography variant="caption" color="error">
                                            Rejected
                                        </Typography>
                                    );
                                    labelProps.error = true;
                                }

                                return (
                                    <Step key={label}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Box>
                </div>
                <div className='p-[8]'>
                    <h1 className='text-[1.5rem] font-semibold'>{form.form_title}</h1>
                    <h2 className='text-gray-600'>{form.createdBy}</h2>
                </div>
                
            </div> 
        </>
    )
}


export default FormFlow;